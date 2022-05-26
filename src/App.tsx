import { Link, Typography } from "@mui/material"

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
      <Link
        style={{ marginBottom: 48 }}
        href="itms-services://?action=download-manifest&url=https://hkhamm.com/app.plist"
      >
        Install app
      </Link>
      <Link href="daimlertechassist://home">Open app</Link>
    </div>
  )
}

export default App
