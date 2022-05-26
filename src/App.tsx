import { Link } from "@mui/material"

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        style={{ marginBottom: "48" }}
        href="itms-services://?action=download-manifest&url=https://hkhamm.com/app.plist"
      >
        Install app
      </Link>
      <br />
      <Link href="daimlertechassist://home">Open app</Link>
    </div>
  )
}

export default App
