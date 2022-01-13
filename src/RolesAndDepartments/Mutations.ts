import { gql } from '@apollo/client';

export const ADD_ROLE_AND_DEPARTMENTS = gql`
    mutation ($document: RoleInput) {
        AddRoleAndDepartments(document: $document) {
            Role
            DepartmentName
        }
    }
`;

export const DELETE_ROLE_BY_ROLE_NAME = gql`
    mutation ($role: String) {
        deleteRoleByRoleName(role: $role) {
            Role
            DepartmentName
        }
    }
`;

export const UPDATE_ROLE_BY_ROLE_NAME = gql`
    mutation ($role: String, $departmentList: [String]) {
        updateRoleByRoleName(role: $role, departmentList: $departmentList) {
            Role
            DepartmentName
        }
    }
`;
