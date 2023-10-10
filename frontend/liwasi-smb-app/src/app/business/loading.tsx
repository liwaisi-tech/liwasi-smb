import LargeTitle from "@/components/LargeTitle";

function LoadingBusinessPage() {
  return (
    <div className="w-full flex justify-center p-4">
      <LargeTitle
        className="w-full md:w-3/4 justify-center flex"
        title={`Cargando información de pyme...`} />
    </div>
  )
}

export default LoadingBusinessPage