import {useEffect, useState} from "react";
import {getFlagSrc} from "../../services/bookstoreApi";
import styled from "@emotion/styled";

const Flag = styled.img`
  width: 3rem;
  border: solid black 1px;
  margin-left: auto;
  margin-top: .4rem;
`

export const CountryFlag = ({code}: { code?: string }) => {
  const [imgSrc, setImgSrc] = useState('');
  useEffect(() => {
    if (code) getFlagSrc(code).then(src => setImgSrc(src))
  }, [code]);

  return <Flag src={imgSrc} alt={code}/>
}