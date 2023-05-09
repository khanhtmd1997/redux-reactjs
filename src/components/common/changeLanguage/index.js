import { Image, Select } from "antd";
import i18next from "i18next";
import { LanguageSelect } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../../../redux/language";
import { setLang } from "../../../redux/language/reducer";

const { Option } = Select;

const arrayLanguage = [
  {
    value: "vi",
    label: "VietNamese",
    flag: "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Vietnam-2-64.png",
  },
  {
    value: "en",
    label: "English",
    flag: "https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/Britain-64.png",
  },
];

export default function LanguageComponent() {
  const { langDefault } = useSelector(languageSelector);
  const dispatch = useDispatch();

  //change language
  const handleChangeLanguage = (val) => {
    i18next.changeLanguage(val);
    dispatch(setLang(val));
  };

  return (
    <LanguageSelect onChange={handleChangeLanguage} defaultValue={langDefault}>
      {arrayLanguage.map((el, i) => (
        <Option key={i} value={el.value}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                marginRight: "8px",
                marginTop: "-1px",
              }}
            >
              <Image
                src={el.flag}
                alt=""
                preview={false}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </div>
            <div>{el.label}</div>
          </div>
        </Option>
      ))}
    </LanguageSelect>
  );
}
