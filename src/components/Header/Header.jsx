import Loader from './../Loader/Loader';
import UseFetch from './../../CustomHooks/useFetch/UseFetch';
import HeaderImg from './../HeaderImg/HeaderImg';
import CategoryList from './../CategoryList/CategoryList';

export default function Header() {
    const {data, error,isLoading} = UseFetch('https://dummyjson.com/products/categories')    
    if(isLoading){
        return <Loader />;
    }
  return (
    <header className=''>
    {error ? <div className="alert alert-danger">{error}</div>: ""}
    <div className="container">
        <div className="row">
            <div className='col-2 border-end p-0'>
                <CategoryList data={data} />
            </div>
            <HeaderImg />
        </div>
    </div>
    
    </header>
  )
}
