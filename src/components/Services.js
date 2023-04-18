import styled from "styled-components";
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";

const Wrapper = styled.section`
padding:9rem 0;

.grid{
    gap:4.8rem;
}

.services-1,
.services-2,
.services-3{
    width:auto;
    height:30rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:;
}
div{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:1rem;
}


h3{
    margin-top:1.4rem;
    font-size:2rem;
}
.icon{
    width:8rem;
    height:8rem;
    padding:2rem;
    border-radius:50%;
    background-color:#fff;
    color:#5138ee;

}
`

const Services = () => {
   return <Wrapper>
    <div className="container">
    <div className="grid grid-three-column">
    <div className="services-1">
        <div>
            <TbTruckDelivery className="icon"/>
             <h3>Super Fast and Free Dilivery</h3>
        </div>
    </div>
    <div className="services-2">
        <div>
            <MdSecurity className="icon"/>
             <h3>Super Fast and Free Dilivery</h3>
        </div>
    </div>
    <div className="services-3">
        <div>
            <GiReceiveMoney className="icon"/>
             <h3>Super Fast and Free Dilivery</h3>
        </div>
    </div>
    </div>
    </div>
    </Wrapper>;
};

export default Services;