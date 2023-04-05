import style from './Companies.module.css'

const Companies = () => {
    return (
        <div className={ style.companies_wrapper }>
            <h1 className={ style.companies_title } >All companies</h1>
            <section className={ style.companies_items }>
                <div className={ style.item }>
                    <img src="" alt="" />
                    <h4>Google</h4>
                    <p>Establish Feb, 2004</p>
                    <div></div>
                    <button>View Profile</button>
                </div>
            </section>
        </div>
    )
}
export default Companies;