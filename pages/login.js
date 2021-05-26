import Layout from '../components/layout';
import Head from 'next/head'
import Header from "../components/header";
import Footer from "../components/footer";

const Login = (props) =>{
    return (
      <Layout>
          <Head>
              <title>Access</title>
              <meta name="description" content="What we do." />
          </Head>
          <h1>Access Premium</h1>
           <div>
               <input type="text" placeholder="user"/>
           </div>
          <Footer></Footer>
      </Layout>
        );
}

export default Login;
