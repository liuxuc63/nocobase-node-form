import { useEffect } from 'react';
import { useActionContext, useRecord, useRequest } from '../../../';

export const useRoleResourceValues = (options) => {
  const record = useRecord();
  const { visible } = useActionContext();
  const result = useRequest(
    {
      resource: 'roles.resources',
      resourceOf: record.roleName,
      action: 'get',
      params: {
        filterByTk: record.name,
      },
    },
    { ...options, manual: true },
  );
  useEffect(() => {
    if (record.usingConfig === 'strategy') {
      return;
    }
    if (visible) {
      result.run();
    }
  }, [visible, record.usingConfig]);
  return;
};