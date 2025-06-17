"use client"; // if you're in `app/` folder



export default function TestThemePage() {


  return (<>

    <table className="table border-collapse">
      <tr>
        <td>
          <button className="btn" popoverTarget="popover-1" >
            Button
            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto" id="popover-1" /* as React.CSSProperties */ >
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </button>
        </td>
        <td>Hello</td>
      </tr>
    </table>

    <button className="btn" popoverTarget="popover-1" /* as React.CSSProperties */>
      Button
    </button>

    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
      popover="auto" id="popover-1" /* as React.CSSProperties */ >
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </>
  );
}
