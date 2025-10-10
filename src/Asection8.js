import React, { useEffect } from 'react'

function Asection8() {
    
  // Load Elfsight script once
  useEffect(() => {
    const existing = document.getElementById('elfsight-platform-script')
    if (existing) return

    const script = document.createElement('script')
    script.id = 'elfsight-platform-script'
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="Container_container__NvvWg" style={{ padding: '24px 0', display: 'contents' }}>

      {/* Responsive wrapper to control sizing */}
      <div className="insta-embed">
        <div className="elfsight-app-b9e8c0a0-dbfd-4ec2-9b3c-1ed6cd06377f" data-elfsight-app-lazy></div>
      </div>
     

    </div>
    
  )
  
}


export default Asection8



