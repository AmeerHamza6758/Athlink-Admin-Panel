import { colors } from "../../../helpers/constants";

export const Table = () => {
  return (
    // <div>
    <table className="table w-full p-4 text-sm">
      <thead>
        <tr>
          <th className={`text-[${colors.orange}] text-start `} scope="col">
            Name
          </th>
          <th className={`text-[${colors.orange}] text-start `} scope="col">
            User Name
          </th>
          <th className={`text-[${colors.orange}] text-start `} scope="col">
            Phone
          </th>
          <th className={`text-[${colors.orange}] text-start `} scope="col">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-300 text-sm">
          <td>Yasmany B</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td>Yasmany B</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    // </div>
  );
};
