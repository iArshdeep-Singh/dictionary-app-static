import {Link, useNavigate} from "react-router-dom"
import Layout from '../layout/Layout'
import {useDispatch, useSelector} from "react-redux"
import {inputData} from "../../store/slices/signup"
import {useEffect} from "react"
import './css/signup.css'


const SignUp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {inData} = useSelector((state) => state.sign)

    const auth = localStorage.getItem("user")

    useEffect(() => {
        if (auth)
        {
            navigate('/')
        }
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        dispatch(inputData({[name]: value}))
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        localStorage.setItem("user", inData.name)
        navigate('/')
    }


    return (
        <Layout>
            <div id="container">

                <div id="dictionary-container">English <br />Dictionary
                </div>

                <div id="signup-container">
                    <h1>Search any English word</h1>
                    <h3>Join today.</h3>
                    <input type="text" name="name" onChange={handleChange} placeholder="Your Name" />
                    <input type="username" name="username" onChange={handleChange} placeholder="Set Username" />
                    <input type="password" name="password" onChange={handleChange} placeholder="Set Password" />
                    <button id="create-account" type="button" onClick={handleSubmit}>Create account</button>
                    <p>Already have an account?</p>
                    <Link to="/login"><button id="sign-in" type="button">Sign In</button></Link>
                </div>
            </div>
        </Layout>
    )
}

export default SignUp