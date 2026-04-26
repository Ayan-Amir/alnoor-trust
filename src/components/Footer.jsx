function Footer({ orgName, location }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#081c4b] py-8 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <p className="font-semibold text-white">{orgName}</p>
          <p className="text-sm">{location}</p>
        </div>
        <p className="text-sm">Copyright {year} {orgName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
