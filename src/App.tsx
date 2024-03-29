import { Link, Typography } from "@mui/material"
import InstallProd from "./install_prod.png"
import InstallQA from "./install_qa.png"

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
      <Link href="itms-services://?action=download-manifest&url=https://hkhamm.com/TechAssist.plist">
        Install prod app
      </Link>
      <img
        src={InstallProd}
        style={{ height: 300, width: 300, marginBottom: 48 }}
        alt="Install prod app qr code"
      />
      <Link href="itms-services://?action=download-manifest&url=https://hkhamm.com/TechAssist-qa.plist">
        Install QA app
      </Link>
      <img
        src={InstallQA}
        style={{ height: 300, width: 300 }}
        alt="Install qa app qr code"
      />
    </div>
  )
}

export default App
