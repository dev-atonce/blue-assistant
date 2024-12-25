import Cover from "@/components/website/layout/Cover";

export default async function About() {
  return (
    <>
      <div className="about-us">
        <Cover
          pageName={"About Us"}
          engName="Domestic Branches"
          image="/img/service/branch_banner.jpg"
          prevPage={{ pageName: "Home", url: "/" }}
        />
        <div className="container px-2 md:px-0">
          <div className="grid grid-cols-1 gap6">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
