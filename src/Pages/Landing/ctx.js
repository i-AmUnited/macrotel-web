import arm from '../../Images/arm.png';
import noor from '../../Images/noor.png';
import allianz from '../../Images/allianz.png';
import svt from '../../Images/svt.png'


const Ctx = () => {
    return (
        <div className="px-4 md:px-32 text-center">
            <p className="className='font-bold mb-12">Trusted by some leading brands</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className=''>
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={arm} className=" h-6" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Assets & Resource Management Holding Company</p>
                </div>
                <div className=''>
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={noor} className="h-6" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Noor Takaful Insurance Limited</p>
                </div>
                <div className=''>
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={allianz} className="h-6" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Alliance Nigeria PLC</p>
                </div>
                <div className=''>
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={svt} className="h-8" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Sovereign Trust Insurance PLC</p>
                </div>
            </div>
        </div>
    )
}
export default Ctx;