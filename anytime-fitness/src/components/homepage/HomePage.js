import Header from "./Header";
import Featured from "./Featured";
import About from "./About";
import Footer from "./Footer";
import styled from "styled-components";

export default function HomePage () {
    return (
        <Page>
            <Header />
            <PageContainer>
                {/* <Featured /> */}
                <About />
            </PageContainer>
            <Footer />
        </Page>
    )
}

const PageContainer = styled.div`
width: 95%;
margin: 0 auto;
`

const Page = styled.div`
background-color: #fff;
color: #1D1D1F;
`