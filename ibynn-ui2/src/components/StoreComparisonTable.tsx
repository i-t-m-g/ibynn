import React, { FC } from 'react';
import ReactDOMServer from 'react-dom/server'

const StoreComparisonTable = (online_sellers:any):string => {
    const getTableBody = () => {
        return online_sellers.map((item:any) => (
            <tbody>
                    <tr className="font-normal border-b border-border-base last:border-b-0">
                        <td className="p-4" style={{color: 'blue'}}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer">
                                {item.name}
                            </a>
                        </td>
                        <td className="p-4">
                            <p className="text-xs m-1 text-green-700"><span className="font-bold">Item Price:</span>{item.base_price}</p>
                            <p className="text-xs m-1"><span className="font-bold">Shipping:</span>{item.additional_price?.shipping}</p>
                            <p className="text-xs m-1"><span className="font-bold">Tax:</span>{item.additional_price?.tax}</p>
                            <p className="text-xs m-1"><span className="font-bold">Total Price:</span>{item.total_price}</p>
                        </td>
                    </tr>
                </tbody>
            ));
    }

    return ReactDOMServer.renderToString(
        <table className="w-full text-sm font-semibold text-brand-dark lg:text-base">
            <thead>
                <tr>
                    <th className="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">
                        Store
                    </th>
                    <th className="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
                        Price
                    </th>
                </tr>
            </thead>
            {getTableBody()}
        </table>
    );
}

export default StoreComparisonTable;
