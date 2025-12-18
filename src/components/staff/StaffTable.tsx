'use client';

import Link from 'next/link';

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  photo?: string;
  initials?: string;
  role: string;
  isSuperintendent?: boolean;
  gphcNumber?: string;
  lastActive: string;
  status: 'active' | 'inactive';
}

const staffMembers: StaffMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@pharmacloud.co.uk',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpCkJmg_z9bgb1n9NSjbaAQi24Gp3Py7fd_FzGOi_xlhcHdbJy5wSbnErkPb0qowqgGsa__Tk7LMd-X1pH1SLlAmh83zFqGXxRnMZB8ZMSdBBp5bKidyUMNJCBbmEQqwiJ3WYxbTATFnnM9xmr-QwJ9oQb7N1S4hQaFUSntdotXew4bkdUtrMpTUa8RSjoRLsF4YqbfC4pdOhitd9gLixaKKVlbIH--gWXHjT0r_CpnDmWnzb1aMD39Xo-CRFAc0OBjdqs6RKTtG4',
    role: 'Superintendent',
    isSuperintendent: true,
    gphcNumber: '2045921',
    lastActive: 'Just now',
    status: 'active',
  },
  {
    id: '2',
    name: 'David Miller',
    email: 'david.m@pharmacloud.co.uk',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiKcI0YsECwM1tW73ILFucOoXvzcXiXiIey5_41Yl84aL2MRvftG7d4oX5qgCHCKTiT_6M9hj2UJRqUsdP_XuIUx0tIEp7oBFeRLkQSroSLIaWoKGjtHge6jyEbJgy9D-3yYkK_XcmNHJA82mCblcwsWAz_D9h_h7uL6WJtQmH6cHpVBrs6996wzNny98LjN61iTNeAH9r18STopd5mfbFcxcMS9butC1ZNN5xB7hyBLqOmraTmd_pQZue-nJt-9Hx5j2a-TWKjc0',
    role: 'Dispenser',
    lastActive: '2 hours ago',
    status: 'active',
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya.p@pharmacloud.co.uk',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnt5JZ3ZsHWlhAvmmOCCST5KbVRLjUwsGz4VHjEuyts897XCoBtAxc2qXAN_08QjK6b8HiWOqGHXxPo5GP9aIfbdyZAAesKRdm19Y6dXxBd3WCOdS5jefzltFXB2qKe8k8eF4x6FNPROndvBtqotQgouJhZiLDOwlorZJldjtH8eULD_Vljtg2eEAnTqTXL0z2Ml-UCOsD1ENm4xSxW1U4PDE_Usc3xgoYcskEtIK_qPUE5KYYno2Kqlc4TBj0xMVEFF1XB3jPQBg',
    role: 'Technician',
    gphcNumber: '5012384',
    lastActive: 'Yesterday',
    status: 'active',
  },
  {
    id: '4',
    name: 'Locum User 01',
    email: 'locum.01@pharmacloud.co.uk',
    initials: 'LU',
    role: 'Locum Pharmacist',
    gphcNumber: '2088123',
    lastActive: '2 weeks ago',
    status: 'inactive',
  },
];

const getStatusBadge = (status: string) => {
  if (status === 'active') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
      Inactive
    </span>
  );
};

export default function StaffTable() {
  return (
    <div className="bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-850">
            <tr>
              <th
                className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                scope="col"
              >
                Staff Member
              </th>
              <th
                className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                scope="col"
              >
                Role
              </th>
              <th
                className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                scope="col"
              >
                GPhC Number
              </th>
              <th
                className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                scope="col"
              >
                Last Active
              </th>
              <th
                className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                scope="col"
              >
                Status
              </th>
              <th className="relative px-6 py-4" scope="col">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-850 divide-y divide-slate-200 dark:divide-slate-700">
            {staffMembers.map((member, index) => (
              <tr
                key={member.id}
                className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                  member.status === 'inactive'
                    ? 'bg-slate-50/50 dark:bg-slate-800/20'
                    : ''
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      {member.photo ? (
                        <img
                          alt={`${member.name} portrait`}
                          className="h-10 w-10 rounded-full object-cover"
                          src={member.photo}
                        />
                      ) : (
                        <div className="h-10 w-10 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-full">
                          <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                            {member.initials}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <Link
                        href={`/staff/${member.id}`}
                        className={`text-sm font-semibold hover:text-primary transition-colors ${
                          member.status === 'inactive'
                            ? 'text-slate-500 dark:text-slate-400'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {member.name}
                      </Link>
                      <div
                        className={`text-sm ${
                          member.status === 'inactive'
                            ? 'text-slate-400 dark:text-slate-500'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {member.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {member.isSuperintendent ? (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-[18px] text-primary"
                        title="Superintendent"
                      >
                        verified
                      </span>
                      <span className="text-sm text-slate-900 dark:text-white">{member.role}</span>
                    </div>
                  ) : (
                    <span
                      className={`text-sm ${
                        member.status === 'inactive'
                          ? 'text-slate-500 dark:text-slate-400'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {member.role}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {member.gphcNumber ? (
                    <span
                      className={`font-mono text-sm px-2 py-1 rounded ${
                        member.status === 'inactive'
                          ? 'text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-800'
                          : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700'
                      }`}
                    >
                      {member.gphcNumber}
                    </span>
                  ) : (
                    <span className="text-sm text-slate-400 italic">N/A</span>
                  )}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    member.status === 'inactive'
                      ? 'text-slate-400 dark:text-slate-500'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {member.lastActive}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(member.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/staff/${member.id}`}
                    className="text-slate-400 hover:text-primary transition-colors inline-block"
                    title="View Details"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white dark:bg-slate-850 px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
              <span className="font-medium">12</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <a
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-850 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                href="#"
              >
                <span className="sr-only">Previous</span>
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </a>
              <a
                aria-current="page"
                className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                href="#"
              >
                1
              </a>
              <a
                className="bg-white dark:bg-slate-850 border-slate-300 dark:border-slate-600 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                href="#"
              >
                2
              </a>
              <a
                className="bg-white dark:bg-slate-850 border-slate-300 dark:border-slate-600 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                href="#"
              >
                3
              </a>
              <a
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-850 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                href="#"
              >
                <span className="sr-only">Next</span>
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

