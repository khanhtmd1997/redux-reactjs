import { Col, Form, Input } from "antd";
import FilterFormComponent from "../../../components/filterForm";
import { Fragment } from "react";
import TableComponent from "../../../components/common/table";
import FormComponent from "../../../components/common/form";

export default function TestTemplate(props) {
  const {
    form,
    form1,
    onSubmitForm,
    filterData,
    totalData,
    formLayout,
    arrayButton,
    setStep,
    clearFilter,
    colButton,
    rowSelection,
    dataSource,
    columns,
    removeKey,
    setRemoveKey,
    setNewDataSource,
    onChangePagination,
  } = props;

  return (
    <Fragment>
      <FilterFormComponent
        form={form}
        onSubmitForm={onSubmitForm}
        filterData={filterData}
        formLayout={formLayout}
        arrayButton={arrayButton}
        setStep={setStep}
        clearFilter={clearFilter}
        colButton={colButton}
      >
        <Col span={12}>
          <Form.Item name="test" label="text">
            <Input />
          </Form.Item>
        </Col>
      </FilterFormComponent>
      <FormComponent
        form={form1}
        initialValues={{
          ...form1.getFieldsValue(),
        }}
      >
        <TableComponent
          rowSelection={rowSelection}
          data={dataSource}
          columns={columns}
          removeKey={removeKey}
          setRemoveKey={setRemoveKey}
          setNewDataSource={setNewDataSource}
          pagination={filterData}
          totalData={totalData}
          onChangePagination={onChangePagination}
          headerTable="Test table"
        />
      </FormComponent>
    </Fragment>
  );
}
