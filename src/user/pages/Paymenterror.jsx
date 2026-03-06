import { XCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "flowbite-react";

const PaymentError = () => {
    const { id } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md text-center bg-white!">

        {/* Error Icon */}
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <XCircle className="h-14 w-14 text-red-600" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          Payment Failed
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-500">
          Unfortunately, your payment could not be processed. Please try again or use a different payment method.
        </p>

        {/* Error Reasons */}
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-left">
          <h3 className="mb-2 text-sm font-semibold text-red-800">
            Common reasons for failure:
          </h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-red-700">
            <li>Insufficient funds</li>
            <li>Card expired or invalid</li>
            <li>Network connectivity issues</li>
            <li>Transaction declined by bank</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to={`/booking/${id}`} className="w-full sm:w-auto">
      <Button color="failure" className="w-full">
        Try Again
      </Button>
    </Link>

          <Link to="/contact" className="w-full sm:w-auto">
            <Button color="gray" outline className="w-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PaymentError;