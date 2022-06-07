import { Link, Typography } from "@mui/material"
import InstallApp from "./install_app.png"
import OpenApp from "./open_app.png"

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography style={{ fontWeight: "bold", marginBottom: 48 }}>
        Daimler TechAssist
      </Typography>
      <Link href="itms-services://?action=download-manifest&url=https://hkhamm.com/app.plist">
        Install app
      </Link>
      <img
        src={InstallApp}
        style={{ height: 300, width: 300, marginBottom: 48 }}
        alt="Install app qr code"
      />
      <Link href="dtnatechassist://photo/8970">Open app</Link>
      <img
        src={OpenApp}
        style={{ height: 300, width: 300 }}
        alt="Open app qr code"
      />
    </div>
  )
}

export default App
