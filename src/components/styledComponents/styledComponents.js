import styled  from 'styled-components';
import {Button} from 'react-bootstrap'


export const Wrapper = styled.li`
    color: ${(props)=> props.color || "black"};
`
export const InputWrapper = styled.div`
    margin : 30px;
`
export const IWrapper = styled.input`
    margin-right : 30px;
`
export const BWrapper = styled(Button)`
    margin : 10px;
`
export const HWrapper = styled.h3`
    margin : 10px;
`
