import React from "react";

export const ProductCategoryRow = (props: any) => {
    const category = props.category
    return (
        <tr>
            <th colSpan={2}>
                {category}
            </th>
        </tr>
    )
}