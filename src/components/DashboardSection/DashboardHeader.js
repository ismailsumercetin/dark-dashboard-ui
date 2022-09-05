export default function DashboardHeader() {
  return (
    <header className="dashboard-header flex flex-row">
      <InvoiceSection />
      <RevenueSection />
    </header>
  );
};

const INVOICE_ITEMS = [
  {
    value: '45,941',
    title: 'Overdue'
  },
  {
    value: '37,500',
    title: 'Total Outstanding'
  },
  {
    value: '9,200',
    title: 'In Process'
  },
  {
    value: '5,700',
    title: 'Paid Today'
  }
];

function InvoiceSection() {
  return (
    <section className="invoice-section flex flex-col">
      <h2>Invoices</h2>
      <div className="invoice-item-container flex flex-row">
      {
        INVOICE_ITEMS.map((item, i) => <InvoiceItem key={i} {...item} />)
      }
      </div>
    </section>
  );
};

function InvoiceItem({ value, title }) {
  return (
    <div className="invoice-item flex flex-col">
      <p className="invoice-value">{ `$${value}` }</p>
      <p className="invoice-title">{ title }</p>
    </div>
  );
}

function RevenueSection() {
  return (
    <section className="revenue-section flex flex-col">
      <h2>Outstanding Revenue</h2>
      <div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar-inside">

          </div>
        </div>
        <p className="revenue-title">$45,941 Overdue</p>
      </div>
    </section>
  );
};
