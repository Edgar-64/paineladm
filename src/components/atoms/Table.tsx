import { ComponentProps } from "react";

export const Table = ({ ...props }: ComponentProps<"input">) => (
  <div {...props}>
    <table>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>B</td>
          <td>C</td>
          <td>D</td>
        </tr>
      </tbody>
    </table>
  </div>
);
