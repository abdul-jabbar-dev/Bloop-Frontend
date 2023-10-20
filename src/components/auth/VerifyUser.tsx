import { Alert, Button } from "antd";


export default function VerifyUser() {
    return (
        <Alert style={{ position: "fixed", top: 0, width: "100%", zIndex: 33333999 }}
            message="Unverified Account! Try to provide your valid information to verify your account"
            showIcon
            className="px-60"
            type="error"
            action={
                <Button size="small" danger>
                    Verify
                </Button>
            }
        />
    )
}
