import { useNavigate } from "react-router-dom";
import { colors } from "../../../helpers/constants";
import { MessageButton } from "../../buttons/PrimaryButton";
import profile from '../../../assets/images/userImage.jpeg'

export const Table = () => {
    const navigate = useNavigate()
    return (
        // <div>
            <table className="table w-full p-4 text-sm overflow-x-auto min-w-[40rem]">
                <thead>
                    <tr>
                        <th className={`text-[${colors.orange}] text-start font-semibold text-xl pb-4`} scope="col" >Name</th>
                        <th className={`text-[${colors.orange}] text-start font-semibold text-xl pb-4`} scope="col">Username</th>
                        <th className={`text-[${colors.orange}] text-start font-semibold text-xl pb-4`} scope="col" >Phone</th>
                        <th className={`text-[${colors.orange}] text-start flex justify-between items-center pb-4 font-semibold text-xl`} scope="col">
                        Email
                        <div className="text-xs font-normal">
                        <MessageButton title='View Users' width='91px' height='28px' onclick={()=>{navigate('/users')}}/>
                        </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-[#EAECF0] text-sm">
                        <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full" onClick={()=>navigate('/users-actions')}/> Yasmany B</td>
                        <td onClick={()=>navigate('/users-actions')}>Mark@twitter</td>
                        <td onClick={()=>navigate('/users-actions')}>09876544722</td>
                        <td onClick={()=>navigate('/users-actions')}>@mdo</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center" onClick={()=>navigate('/users-actions')}><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td onClick={()=>navigate('/users-actions')}>Jacob.Mark</td>
                        <td onClick={()=>navigate('/users-actions')}>09876544722</td>
                        <td onClick={()=>navigate('/users-actions')}>@fat</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td >Larry the Bird</td>
                        <td>09876544722</td>
                        <td>@twitter</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td>Mark</td>
                        <td>09876544722</td>
                        <td>Mark@mdo</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td>Jacob.Thornton</td>
                        <td>09876544722</td>
                        <td>Thornton@fat</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td >Larry the Bird</td>
                        <td>09876544722</td>
                        <td>Bird@twitter</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td>Mark.Otto</td>
                        <td>09876544722</td>
                        <td>Mark@mdo</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td>Jacob.Thornton</td>
                        <td>09876544722</td>
                        <td>Jacob@fat</td>
                    </tr>
                    <tr className="border-b border-[#EAECF0]">
                    <td className="flex gap-4 items-center"><img src={profile} className="w-10 h-10 rounded-full"/> Yasmany B</td>
                        <td >Larry the Bird</td>
                        <td>09876544722</td>
                        <td>Larry@twitter</td>
                    </tr>
                </tbody>
            </table>
        // </div>
    )
} 