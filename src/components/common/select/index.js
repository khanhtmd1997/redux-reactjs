import { Select } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

export default function SelectComponent(props) {
  const {
    form,
    formKey,
    formName,
    data,
    defaultValue = null,
    allowClear = false,
    setValue,
    mode = undefined,
    showSearch = true,
    placeholder = "",
  } = props;
  const [valueChange, setValueChange] = useState(defaultValue);

  useEffect(() => {
    if (form) {
      form.setFieldsValue({
        [formKey]: valueChange,
      });
    }
  }, [form, valueChange, formKey]);

  const handleChange = (value) => {
    setValueChange(value);
    if (setValue) setValue(value);
  };
  return (
    <Select
      onChange={handleChange}
      allowClear={allowClear}
      defaultValue={defaultValue}
      mode={mode}
      showSearch={showSearch}
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
      }
      placeholder={placeholder}
      notFoundContent={<div>Not Content Data</div>}
    >
      {data &&
        data.map((el, i) => (
          <Option key={i} value={el?.value ? el.value : el[formKey]}>
            {el?.label ? el.label : el?.name ? el.name : el[formName]}
          </Option>
        ))}
    </Select>
  );
}
