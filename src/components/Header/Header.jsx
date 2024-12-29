import Loader from './../Loader/Loader';
import HeaderImg from './../HeaderImg/HeaderImg';
import CategoryList from './../CategoryList/CategoryList';
import useFetch from '../../CustomHooks/useFetch/useFetch';

export default function Header() {
    const {data, error,isLoading} = useFetch('https://dummyjson.com/products/categories');
    if(isLoading){
        return <Loader />;
    }
  return (
    <header className=''>
    {error ? <div className="alert alert-danger">{error}</div>: ""}
    <div className="container">
        <div className="row">
            <div className=' col-md-12 col-lg-2 border-sm-0 border-end p-0 '>
                <CategoryList data={data} />
            </div>
            <HeaderImg />
        </div>
    </div>
    
    </header>
  )
}
