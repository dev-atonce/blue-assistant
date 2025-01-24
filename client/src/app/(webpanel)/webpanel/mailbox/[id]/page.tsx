"use client";
import Breadcrumb from "@/components/webpanel/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/webpanel/Layouts/DefaultLayout";
import Message from "@/components/webpanel/Layouts/Message";
import { useUsersStore } from "@/store/usersStore";
import { useEffect, useState } from "react";

const MailBoxView = ({ params }: { params: { id: string } }) => {
  // @ts-ignore
  const [msg, setMsg] = useState({} as any);
  const { token } = useUsersStore();
  const { id } = params;

  const fetchMsg = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/formcontact/${id}`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    setMsg(data);
  };

  useEffect(() => {
    fetchMsg();
  }, []);

  console.log(msg);
  return (
    <>
      <DefaultLayout>
        <Breadcrumb
          pageName={`Message from: ${msg?.name_kanji} - ${msg?.name_eng}`}
          module={{ pageName: "Mail Box", url: "mailbox" }}
        />
        <Message data={msg} />
      </DefaultLayout>
    </>
  );
};
export default MailBoxView;
