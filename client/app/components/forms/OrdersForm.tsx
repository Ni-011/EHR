import React, { useState } from 'react';
import { FlaskConical, NotebookText } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const OrdersForm = () => {
  const [selectedVisitId, setSelectedVisitId] = useState<string | null>(null);

  const visits = [
    { id: 'A1B2C', date: '10/26/2023' },
    { id: 'D3E4F', date: '10/20/2023' },
    { id: 'G5H6I', date: '10/15/2023' },
    { id: 'J7K8L', date: '10/01/2023' },
    { id: 'M9N0O', date: '09/25/2023' },
  ];

  const labOrders = [
    {
      labOrder: 'Blood Test',
      cptCode: '80053',
      description: 'Comprehensive Metabolic Panel',
      qty: 1,
      statusChangedBy: 'Dr. Smith',
      status: 'pending',
    },
    {
      labOrder: 'Urine Analysis',
      cptCode: '81003',
      description: 'Urinalysis, complete with microscopy',
      qty: 1,
      statusChangedBy: 'Nurse John',
      status: 'in process',
    },
    {
      labOrder: 'X-Ray Chest',
      cptCode: '71045',
      description: 'Radiologic examination, chest; single view',
      qty: 1,
      statusChangedBy: 'Dr. Jones',
      status: 'completed',
    },
    {
      labOrder: 'MRI Brain',
      cptCode: '70551',
      description: 'Magnetic resonance (MR) imaging; brain, without contrast material',
      qty: 1,
      statusChangedBy: 'Dr. Smith',
      status: 'pending',
    },
    {
      labOrder: 'ECG',
      cptCode: '93000',
      description: 'Electrocardiogram, complete, tracing only',
      qty: 1,
      statusChangedBy: 'Nurse Jane',
      status: 'completed',
    },
  ];

  const getStatusColorClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in process':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4">
      {/* Recent Visits Section */}
      <h2 className="text-2xl font-bold mb-4">Recent Visits</h2>
      <div className="flex flex-wrap justify-around gap-2 mb-8">
        {visits.map((visit, index) => (
          <div
            key={index}
            className={`w-64 h-24 rounded-lg shadow-md flex flex-col items-center justify-center text-gray-700 p-2 text-sm transition-colors duration-200 cursor-pointer
              ${selectedVisitId === visit.id ? 'bg-blue-200 border-2 border-blue-500' : 'bg-blue-50 hover:bg-blue-100'}`}
            onClick={() => setSelectedVisitId(visit.id)}
          >
            <span className="font-bold">ID: {visit.id}</span>
            <span>Date: {visit.date}</span>
          </div>
        ))}
      </div>

      {/* Order Summary Section */}
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="bg-blue-50 p-4 mb-4 rounded-lg flex justify-around items-center text-gray-700 text-sm">
        <span className="font-bold">Patient ID: [ID]</span>
        <span className="font-bold">Visit ID: [ID]</span>
        <span className="font-bold">Bill Date: [Date]</span>
        <span className="font-bold">Visit Order Number: [Number]</span>
      </div>

      {/* Lab Orders Section */}
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FlaskConical className="mr-2" /> Lab Orders
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-200 font-bold">
            <TableRow className="border-b border-gray-300">
              <TableHead className="font-bold border-r border-gray-300">Lab Order</TableHead>
              <TableHead className="font-bold border-r border-gray-300">CPT Code</TableHead>
              <TableHead className="font-bold border-r border-gray-300">Description</TableHead>
              <TableHead className="font-bold border-r border-gray-300">Qty</TableHead>
              <TableHead className="font-bold border-r border-gray-300">Status Changed By</TableHead>
              <TableHead className="font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {labOrders.map((order, index) => (
              <TableRow key={index} className="border-b border-gray-200">
                <TableCell className="border-r border-gray-200">{order.labOrder}</TableCell>
                <TableCell className="border-r border-gray-200">{order.cptCode}</TableCell>
                <TableCell className="border-r border-gray-200">{order.description}</TableCell>
                <TableCell className="border-r border-gray-200">{order.qty}</TableCell>
                <TableCell className="border-r border-gray-200">{order.statusChangedBy}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColorClass(order.status)}`}>
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Radiology Orders Section */}
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <NotebookText className="mr-2" /> Radiology Orders
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-200 font-bold">
            <TableRow>
              <TableHead className="font-bold">Rad order #</TableHead>
              <TableHead className="font-bold">CPT code</TableHead>
              <TableHead className="font-bold">Description</TableHead>
              <TableHead className="font-bold">Qty</TableHead>
              <TableHead className="font-bold">Status Changed By</TableHead>
              <TableHead className="font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* No data yet */}
            <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No reports.
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Other Procedures Section */}
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <NotebookText className="mr-2" /> Other Procedures
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-200 font-bold">
            <TableRow>
              <TableHead className="font-bold">Procedure Order #</TableHead>
              <TableHead className="font-bold">CPT code</TableHead>
              <TableHead className="font-bold">Description</TableHead>
              <TableHead className="font-bold">Qty</TableHead>
              <TableHead className="font-bold">Status Changed By</TableHead>
              <TableHead className="font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* No data yet */}
            <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No procedures.
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* ICD Codes Summary Section */}
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <NotebookText className="mr-2" /> ICD Codes Summary
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-200 font-bold">
            <TableRow>
              <TableHead className="font-bold">ICD Code</TableHead>
              <TableHead className="font-bold">Description</TableHead>
              <TableHead className="font-bold">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* No data yet */}
            <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  No ICD codes.
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Medications Section */}
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FlaskConical className="mr-2" /> Medications
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-200 font-bold">
            <TableRow>
              <TableHead className="font-bold">Medication</TableHead>
              <TableHead className="font-bold">Dosage</TableHead>
              <TableHead className="font-bold">Frequency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* No data yet */}
            <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  No medications.
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Additional Notes Section */}
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Additional Notes</h2>
      <Textarea placeholder="Type your additional notes here..." className="min-h-[100px]" />

    </div>
  );
};

export default OrdersForm; 