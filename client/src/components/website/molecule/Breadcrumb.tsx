import { Link } from "@/i18n/routing";
interface BreadcrumbProps {
  pageName: any;
  prevPage: any;
  // prevPage: { pageName: string | null; url: string | null }:any;
}
const Breadcrumb = ({ pageName, prevPage }: any) => {
  return (
    <div className="text-xs font-thin py-1 flex flex-col gap-3 sm:flex-row  ">
      <nav className="w-full ">
        <ol className="flex items-center gap-2  w-full">
          {/* {prevPage.length &&
            prevPage?.map((v: any, k: any) => (
              <li key={k}>
                <Link className="text-blue-700" href={v?.url}>
                  {v?.pageName} |
                </Link>
              </li>
            ))} */}
          {prevPage?.pageName && prevPage?.url ? (
            <li>
              <Link className="text-blue-700" href={prevPage?.url}>
                {prevPage?.pageName} |
              </Link>
            </li>
          ) : (
            ``
          )}

          <li className=" text-blue-700">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
