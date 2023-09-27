import { Container } from "react-bootstrap"
import ProfileDetails from "../../components/Profile/ProfileDetails"

const ProfilePage = () => {

    return (

        <>
            <Container>

                <h3 className="m-5">Hello NAME!</h3>
                <ProfileDetails />

            </Container>
        </>
    )
}

export default ProfilePage