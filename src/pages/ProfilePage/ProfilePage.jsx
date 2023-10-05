import { Container } from "react-bootstrap"
import ProfileDetails from "../../components/Profile/ProfileDetails"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContex"

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (

        <>
            <Container>

                <h3 className="m-5">Hello {user.username}!</h3>
                <ProfileDetails />

            </Container>
        </>
    )
}

export default ProfilePage