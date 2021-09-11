import axios from "axios";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import "owp.glyphicons/glyphicons.css";

function DataTable() {

    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=7&sort=date,desc`).then(res => {
            setPage(res.data);
        });
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div id="tableSellers">
                <div className="table-responsive">
                    <table className="table table-hover table-sm table-bordered">
                        <thead>
                            <tr>
                                <th id="nameColumn">
                                    <span id="gliph" className="glyphicon glyphicon-sort-by-attributes"></span>
                                    ID
                                </th>
                                <th id="nameColumn">
                                    <span id="gliph" className="glyphicon glyphicon-calendar"></span>
                                    Data
                                </th>
                                <th id="nameColumn">
                                    <span id="gliph" className="glyphicon glyphicon-user"></span>
                                    Vendedor
                                </th>
                                <th id="nameColumn">
                                    <span id="gliph" className="glyphicon glyphicon-user"></span>
                                    Clientes visitados
                                </th>
                                <th id="nameColumn">
                                    <span id="gliph" className="glyphicon glyphicon-ok"></span>
                                    Negócios fechados
                                </th>
                                <th id="nameColumn">
                                    <span id="gliph" className="glyphicon glyphicon-euro"></span>
                                    Valor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {page.content?.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                    <td>{item.seller.nome}</td>
                                    <td>{item.visited}</td>
                                    <td>{item.deals}</td>
                                    <td>{item.amount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
        </>
    );
}

export default DataTable;