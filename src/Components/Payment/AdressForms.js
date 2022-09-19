import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";
import UserContext from "../../context/UserContext";
import { AdressBox, AdressInfo, ProductWrapper,ContentWrapper  } from "./AdressForms.style"
import { postPurchase } from '../../service/API';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AdressForms({setLoading}){   
    const {paymentString,setUserInfoForms,userInfoForms}= useContext(UserContext);
    const { total } = useContext(ProductsContext); 
    const{setNumber}=useContext(ProductsContext);

    const navigate = useNavigate()


    function handleForm(e){
        setUserInfoForms({
            ...userInfoForms,
            [e.target.name]: e.target.value
        })
    }

    function postPurchaseAPI(e){

        e.preventDefault();
        if(paymentString === ""){
            alert('escolha um método de pagamento')
            return;
        }
        const num =((Math.random())*100);
        setNumber(num);

        const userPurchases = JSON.parse(localStorage.getItem('userItem'));
        const user =   JSON.parse(localStorage.getItem('drivenespresso'));    
        
        const purchases = userPurchases.map(products=>({
            product : products.pId,
            price : products.pPrice,
            quantity : products.qtd
        }));

        const body = {
            userInfo: [userInfoForms],
            userEmail : user.email,
            items: purchases,
            orderNUmber: num,
            total: (total / 100).toFixed(2).replace(".", ","),
            paymentMethod: paymentString
        } 

        postPurchase(body).then(()=> {
            setLoading(false);
              Swal.fire({
                title: 'Compra concluida com sucesso!',
                confirmButtonText: 'OK',
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/')
                } 
              })
        }).catch((error)=>{
            console.error(error);
          }); 
    }

    return (
        <>
        <ProductWrapper>
        <h1>Endereço de entrega</h1>
        <AdressBox>
            <form onSubmit={postPurchaseAPI}>
            <AdressInfo>
            <span>
                <p>Nome Completo</p>
            </span> 
           <div>
                <input
                type="text"
                name="nome"
                value={userInfoForms.nome}
                onChange={handleForm}
                placeholder='Nome e sobrenome'
                />
            </div> 
        </AdressInfo>
        <AdressInfo>
            <span>
                <p>Telefone</p>
            </span> 
           <div>
                <input 
                type="tel"
                name='telefone'
                required
                value={userInfoForms.telefone}
                onChange={handleForm}
                placeholder='ex : (xx)xxxxx-xxxx'
                />
            </div> 
        </AdressInfo>
        <AdressInfo>
            <span>
                <p>CEP</p>
            </span> 
           <div>
                <input
                type="text"
                name='CEP'
                required
                value={userInfoForms.CEP}
                onChange={handleForm}
                placeholder='ex : xx.xxx.xxx-xx'
                />
            </div> 
        </AdressInfo>
        <AdressInfo>
            <span>
                <p>Endereço</p>
            </span> 
           <div>
                <input
                type="text"
                name='endereço'
                required
                value={userInfoForms.endereço}
                onChange={handleForm}
                />
            </div> 
        </AdressInfo>
        <AdressInfo>
            <span>
                <p>Número da residência</p>
            </span> 
           <div>
                <input
                type="text"
                name='númeroResidência'
                required
                value={userInfoForms.númeroResidência}
                onChange={handleForm}                   
                />
            </div> 
        </AdressInfo>
        <button type='submit'>Salvar</button>
        </form>
        </AdressBox>        
    </ProductWrapper>
   </>
   )
    }