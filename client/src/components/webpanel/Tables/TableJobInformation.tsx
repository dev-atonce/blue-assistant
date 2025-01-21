"use client";

import AntPagination from "../Pagination/AntPagination";
import { useEffect, useState } from "react";
import { useJobInformationStore } from "../../../store/jobInformationStore";
import ActionBtnGroup from "../Button/ActionBtnGroup";
import Province from "@/assets/province.json";
import Dropdown from "@/components/website/molecule/Dropdown";

const TableJobInformation = () => {
  const { fetchItems, deleteItem, items, total } = useJobInformationStore();
  const [pageState, setPageState] = useState(1);
  const [filter, setFilter] = useState({
    keyword: "",
    gender: "",
    jp_skill: "",
    location: "",
    rate_min: "",
    rate_max: "",
  });
  const [query, setQuery] = useState("");
  const onChangeFilter = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClear = () => {
    setPageState(1);
    setFilter({
      keyword: "",
      location: "",
      gender: "",
      jp_skill: "",
      rate_min: "",
      rate_max: "",
    });
  };

  const onSearch = () => {
    fetchItems(pageState, query);
  };
  useEffect(() => {
    fetchItems(pageState, query);
  }, [pageState]);

  useEffect(() => {
    const query = new URLSearchParams(
      Object.entries(filter).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    setQuery(query);
  }, [filter]);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6">
      <div className="max-w-full overflow-x-auto">
        <div className="grid grid-cols-12 gap-4 py-10">
          <input
            name="keyword"
            value={filter?.keyword}
            onChange={onChangeFilter}
            type="text"
            placeholder="คำค้นหา"
            className="focus:ring-0 focus:outline-none lg:col-span-4 col-span-12 bg-slate-100 rounded-md px-4 py-2 text-slate-700"
          />
          <div className="lg:col-span-4 col-span-12">
            <Dropdown
              list={[
                { name: "male", id: "male" },
                { name: "female", id: "female" },
              ]}
              label="Gender"
              topLabel={false}
              selectedOption={filter?.gender}
              setSelectedOption={onChangeFilter}
              keyProp="gender"
              status={false}
            />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <Dropdown
              list={Province}
              label="Location"
              topLabel={false}
              selectedOption={filter?.location}
              setSelectedOption={onChangeFilter}
              keyProp="location"
              status={false}
            />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <Dropdown
              list={[
                { name: "native", id: "native" },
                { name: "N1", id: "N1" },
                { name: "N2", id: "N2" },
                { name: "N3", id: "N3" },
                { name: "N4", id: "N4" },
                { name: "N5", id: "N5" },
              ]}
              label="Japanese Skill"
              topLabel={false}
              selectedOption={filter?.jp_skill}
              setSelectedOption={onChangeFilter}
              keyProp="jp_skill"
              status={false}
            />
          </div>
          <input
            name="rate_min"
            value={filter?.rate_min}
            onChange={onChangeFilter}
            type="number"
            placeholder="Minimum Salary"
            className="focus:ring-0 focus:outline-none lg:col-span-4 col-span-12 bg-slate-100 rounded-md px-4 py-2 text-slate-700"
          />
          <input
            name="rate_max"
            value={filter?.rate_max}
            onChange={onChangeFilter}
            type="number"
            placeholder="Maximum Salary"
            className="focus:ring-0 focus:outline-none lg:col-span-4 col-span-12 bg-slate-100 rounded-md px-4 py-2 text-slate-700"
          />

          <button
            className="col-span-6 py-2 px-10 bg-[#ED1F23] rounded-lg text-white w-full"
            onClick={onClear}
          >
            รีเซ็ต
          </button>
          <button
            className="col-span-6  py-2 px-10 bg-[#0DA1DB] rounded-lg text-white  w-full"
            onClick={onSearch}
          >
            ค้นหา
          </button>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                No.
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Remark
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Gender
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Salary
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Location
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  {(pageState - 1) * Number(process.env.NEXT_PUBLIC_PERPAGE) +
                    (key + 1)}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.firstname} {item.lastname}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.remark ? item.remark : "N/A"}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.gender}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {item.rate_min} - {item.rate_max}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {Province.find((value) => value.id === item.location)?.name}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <ActionBtnGroup
                    // @ts-ignore
                    itemId={item.id}
                    link={`/webpanel/jobinformation/edit/${item.id}`}
                    deleteItem={deleteItem}
                    nextLink={true}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          {total > Number(process.env.NEXT_PUBLIC_PERPAGE) && (
            <AntPagination
              total={total}
              currentPage={pageState}
              setCurrentPage={setPageState}
              pageSize={Number(process.env.NEXT_PUBLIC_PERPAGE)}
            />
          )}
        </table>
      </div>
    </div>
  );
};

export default TableJobInformation;
