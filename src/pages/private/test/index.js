import { Form } from "antd";
import TestTemplate from "../../../template/private/test";
import { Fragment, useState } from "react";
import { COMMON } from "../../../constants";

export default function TestPages() {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [filterData, setFilterData] = useState({
    pageIndex: COMMON.PAGINATION_INDEX,
    pageSize: COMMON.PAGINATION_SIZE,
  });
  const [totalData, setTotalData] = useState(0);
  const onSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <Fragment>
      <TestTemplate
        form={form}
        form1={form1}
        onSubmitForm={onSubmitForm}
        filterData={filterData}
        totalData={totalData}
        // formLayout={formLayout}
        // arrayButton={arrayButton}
        // setStep={setStep}
        // clearFilter={clearFilter}
        // colButton={colButton}
        // rowSelection={rowSelection}
        // dataSource={dataSource}
        // columns={columns}
        // removeKey={removeKey}
        // setRemoveKey={setRemoveKey}
        // setNewDataSource={setNewDataSource}
        // onChangePagination={onChangePagination}
      />
    </Fragment>
  );
}
