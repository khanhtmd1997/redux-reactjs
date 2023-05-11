import { Collapse, Divider, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import SelectComponent from "../select";
import { COMMON } from "../../../constants";
import { CollapseTable } from "./style";
import { PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

// // rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === "Disabled User",
//     // Column configuration not to be checked
//     name: record.name,
//   }),
// };

const selectArrayType = [
  {
    label: "Select multi data",
    value: "checkbox",
  },
  {
    label: "Select one data",
    value: "radio",
  },
];

export default function TableComponent(props) {
  const {
    isSelectType = false,
    expandable = {},
    rowSelection = {},
    x = null,
    y = null,
    data = [],
    columns = [],
    isEditTable = false,
    removeKey = null,
    setRemoveKey,
    setDataSource,
    pagination = {},
    totalData = 0,
    isNotPagination = null,
    onChangePagination,
    headerTable = "Table",
  } = props;
  const [selectionType, setSelectionType] = useState("checkbox");
  const [count, setCount] = useState(0);
  const [paginationOption, setPaginationOption] = useState(
    COMMON.PAGINATION_OPTION
  );

  //custom data if table is edit row
  // useEffect(() => {
  //   let newData = [];
  //   if (isEditTable) {
  //     dataSource.forEach((el, i) => {
  //       console.log(1, el);
  //       newData.push({
  //         ...el,
  //         key: i + 1,
  //       });
  //     });
  //   } else newData = data;
  //   console.log(44444444444, newData);
  //   setDataSource(newData);
  //   setCount(newData.length);
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   if (form) {
  //     dataSource.map((el, i) => {
  //       [`${columnsLabel.name}-${el.key}`].getFieldValues();
  //     });
  //   }
  // }, []);

  //remove key if have and callback set data
  useEffect(() => {
    if (removeKey !== null) {
      const newData = data.filter((item) => item.key !== removeKey);
      setDataSource(newData);
      setCount(newData.length);
    }
    setRemoveKey(null);
    // eslint-disable-next-line
  }, [removeKey]);

  //setData Parent if have setNewDataSource
  // useEffect(() => {
  //   if (setNewDataSource) setNewDataSource(dataSource);
  // }, [setNewDataSource, dataSource]);

  //add row table
  const handleAdd = () => {
    const newData = {
      key: data[data.length - 1].key + 1,
    };
    setDataSource([...data, newData]);
    setCount(count + 1);
  };

  //get pagination option
  useEffect(() => {
    const array = [...paginationOption];
    if (totalData > 20) {
      array.push(totalData);
    }
    setPaginationOption(array);
    // eslint-disable-next-line
  }, []);

  return (
    <CollapseTable defaultActiveKey={["1"]}>
      <Panel key={"1"} header={headerTable}>
        <div className="panel-table">
          {isSelectType ? (
            <div className="select">
              <SelectComponent
                data={selectArrayType}
                defaultValue={selectionType}
                setValue={setSelectionType}
              />
            </div>
          ) : null}

          <div
            className="add-row"
            style={{
              display: isEditTable ? "block" : "none",
            }}
          >
            <Button onClick={handleAdd} type="primary" className="button">
              <PlusOutlined />
            </Button>
            <Divider />
          </div>

          <Table
            rowSelection={
              rowSelection
                ? selectionType
                  ? {
                      ...rowSelection,
                      type: selectionType,
                    }
                  : rowSelection
                : null
            }
            columns={columns}
            dataSource={data}
            expandable={expandable}
            // components={components}
            scroll={{
              y: y,
              x: x,
            }}
            onChange={onChangePagination}
            pagination={
              isNotPagination
                ? null
                : {
                    total: totalData,
                    showTotal: (total) => `Have ${total} record`,
                    defaultPageSize: COMMON.PAGINATION_INDEX,
                    defaultCurrent: COMMON.PAGINATION_SIZE,
                    current: parseInt(
                      pagination?.pageIndex ?? COMMON.PAGINATION_INDEX
                    ),
                    pageSize: parseInt(
                      pagination?.pageSize ?? COMMON.PAGINATION_SIZE
                    ),
                    showSizeChanger: true,
                    pageSizeOptions: paginationOption,
                  }
            }
          />
        </div>
      </Panel>
    </CollapseTable>
  );
}
