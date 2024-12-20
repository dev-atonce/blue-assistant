import PageCover from "@/components/website/layout/pageCover";
export default async function About() {
    return (<>
        <div className="about-us">
            <PageCover />
            <div className="container px-2 md:px-0">
                <div className="grid grid-cols-1 gap6">
                    <div></div>
                </div>
            </div>
        </div>
    </>);
}