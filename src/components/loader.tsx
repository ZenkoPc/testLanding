export function Loader(){
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
    
}

export function LoaderTransparent(){
  return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-10">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
  );
  
}