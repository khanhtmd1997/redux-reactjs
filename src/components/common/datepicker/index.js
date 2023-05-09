import localeVN from "antd/es/date-picker/locale/vi_VN";
import localeEn from "antd/es/date-picker/locale/en_US";
import { useSelector } from "react-redux";
import { languageSelector } from "../../../redux/language";
import { Container } from "./style";
import { COMMON } from "../../../constants";
import { useCallback, useEffect } from "react";
export default function DatePickerComponent(props) {
  const {
    defaultValue,
    form,
    formKey,
    inputReadOnly = false,
    picker = COMMON.TEXT_DATE,
    allowClear = false,
  } = props;

  const { langDefault } = useSelector(languageSelector);

  useEffect(() => {
    if (form && formKey)
      form.setFieldsValue({
        [formKey]: defaultValue,
      });
    // eslint-disable-next-line
  }, []);

  const handleChangeDate = (date, dateString) => {
    form.setFieldsValue({
      [formKey]: dateString,
    });
  };

  //type format date
  const renderFormatDate = useCallback(() => {
    switch (picker) {
      case COMMON.TEXT_MONTH:
        return COMMON.FORMAT_MONTH;
      case COMMON.TEXT_YEAR:
        return COMMON.FORMAT_YEAR;
      case COMMON.TEXT_QUANTER:
        return COMMON.FORMAT_QUANTER;
      default:
        return COMMON.FORMAT_DATE;
    }
  }, [picker]);

  return (
    <Container
      format={renderFormatDate()}
      locale={langDefault === COMMON.VI ? localeVN : localeEn}
      defaultValue={defaultValue}
      onChange={handleChangeDate}
      disabled={inputReadOnly}
      allowClear={allowClear}
    ></Container>
  );
}
