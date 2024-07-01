import Hero from '@/components/Hero'
import FeatureBlock from '@/components/FeatureBlock'
import Certification from '@/components/Certification'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      <div className="max-w-screen-xl mx-auto">
        <FeatureBlock />
      </div>

      <div className="bg-[#f5f5f5]" id="certification">
        <Certification />
      </div>
    </div>
  )
}
