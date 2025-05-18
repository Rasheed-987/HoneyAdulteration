function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-honey-900">Honey Adulteration Dashboard</h1>
        <p className="text-honey-700">View analytics and insights about honey adulteration data</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-honey-100 w-full">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-honey-800">Power BI Report</h2>
          <p className="text-honey-600">Interactive visualization of honey adulteration data</p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-md border">
          {/* <iframe
            title="Multiclass"
            width="100%"
            height="100%"
            style={{ minHeight: "600px" }}
            src="https://app.powerbi.com/reportEmbed?reportId=c7c5dfd1-88a7-4e10-a8b8-515100938280&autoAuth=true&ctid=2c16542f-7b1c-433a-95a4-5ef74428c9a4"
            frameBorder="0"
            allowFullScreen={true}
            className="w-full h-full"
          ></iframe> */}
          {/* <iframe title="Multiclass" width="1140" height="541.25" src="https://app.fabric.microsoft.com/reportEmbed?reportId=332e3b93-15c7-4896-bdf7-697661b83a72&autoAuth=true&ctid=37c1124c-2d89-4d5a-b2a3-0d9ebfab148a" frameborder="0" allowFullScreen="true"></iframe> */}
        <img src="Multiclass_page-0001.jpg" alt="Multiclass PDF Preview"  />


        </div>
      </div>
    </div>
  )
}

export default Dashboard

