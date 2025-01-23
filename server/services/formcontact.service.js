const FormContact = require("../models/FormContact");
const config = require("../configs/app");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const configMail = {
    host: config.mailHost,
    port: config.mailPort,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: config.mailUser,
        pass: config.mailPass,
    },
};

const mailMessage = (mailTo, subject, template) => {
    let messageMail = {
        from: `"Website INQUIRY" <${config.mailDefault}>`,
        to: mailTo,
        subject: subject,
        html: template,
    };
    return messageMail;
};

let MailGenerator = new Mailgen({
    theme: "salted",
    product: {
        name: "Blue Assistant",
        link: "https://th.nissin-asia.com/", // URL Website
    },
});

const methods = {
    async storeContact(data) {
        try {
            const obj = new FormContact(data);
            const inserted = await obj.save();
            return inserted;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async sendEmail(req) {
        const response = {
            body: {
                intro: "You Have Inquiry From Website!",
                table: [
                    {
                        data: [
                            { "#": "Service", detail: req.body.service },
                            { "#": "Customer", detail: req.body.customer },
                            { "#": "Company", detail: req.body.company },
                            { "#": "Name Kanji", detail: req.body.name_kanji },
                            { "#": "Name Eng", detail: req.body.name_eng },
                            { "#": "Email", detail: req.body.email },
                            { "#": "Telephone", detail: req.body.phone },
                            { "#": "Detail", detail: req.body.detail },
                        ].filter((field) => field.detail), // Exclude fields where detail is undefined, null, or empty
                        columns: {
                            customWidth: {
                                "#": "25%",
                                detail: "75%",
                            },
                            customAlignment: {
                                detail: "left",
                            },
                        },
                    },
                ],
            },
        };

        let mail = MailGenerator.generate(response);

        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport(configMail);
            transporter.sendMail(
                mailMessage(config.mailTo, "Inquiry Website", mail),
                async (error, info) => {
                    if (error) {
                        reject(ErrorBadRequest(error.message));
                    } else {
                        await methods.storeContact(req.body);
                        resolve(info.envelope);
                    }
                }
            );
        });
    },

    async findAll(req) {
        const limit = +config.pageLimit;
        const offset = +(limit * ((req.query.page || 1) - 1));
        try {
            const rows = await FormContact.find()
                .sort({ sort: "asc" })
                .limit(limit)
                .skip(offset);
            const count = await FormContact.countDocuments();
            return {
                total: count,
                lastPage: Math.ceil(count / limit),
                currPage: +req.query.page || 1,
                rows: rows,
            };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async findById(id) {
        try {
            const obj = await FormContact.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async update(req) {
        try {
            const obj = await FormContact.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            ).exec();
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async delete(id) {
        try {
            const obj = await FormContact.findOneAndDelete({ _id: id }).exec();
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return { msg: "deleted success" };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },
};

module.exports = { ...methods };
