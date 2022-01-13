import { gql } from '@apollo/client';

export const GET_ALL_ROLES = gql`
    query {
        getAllRoles {
            Role
            DepartmentName
        }
    }
`;

export const GET_ROLE_DATA_BY_ROLE_NAME = gql`
    query ($role: String!) {
        getRoleDataByRoleName(role: $role) {
            Role
            DepartmentName
        }
    }
`;
