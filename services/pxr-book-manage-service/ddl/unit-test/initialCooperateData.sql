/** Copyright 2022 NEC Corporation
Released under the MIT license.
https://opensource.org/licenses/mit-license.php
*/
INSERT INTO pxr_book_manage.my_condition_book
(
    pxr_id,
    attributes,
    is_disabled,
    created_by,
    created_at,
    updated_by,
    updated_at
)
VALUES
(
    '58di2dfse2.test.org',
    'aaa',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    'invalidCoopStatus',
    'aaa',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
);
INSERT INTO pxr_book_manage.USER_ID_COOPERATE
(
    book_id,
    actor_catalog_code, actor_catalog_version,
    region_catalog_code, region_catalog_version,
    app_catalog_code, app_catalog_version,
    wf_catalog_code, wf_catalog_version,
    status,
    user_id,
    is_disabled,
    created_by,
    created_at,
    updated_by,
    updated_at
)
VALUES
(
    1,
    1000004,1,
    null,null,
    null,null,
    1000007,1,
    2,
    'userid01',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    1,
    1000104,1,
    1000007,1,
    null,null,
    null,null,
    2,
    'userid02',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    1,
    1000104,1,
    null,null,
    1000007,1,
    null,null,
    2,
    'userid03',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    1,
    1000104,1,
    null,null,
    null,null,
    1000007,1,
    1,
    'userid04',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    2,
    1000004,1,
    null,null,
    null,null,
    1000007,1,
    1,
    'userid01',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    2,
    1000104,1,
    null,null,
    1000007,1,
    null,null,
    1,
    'userid01',
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
);
INSERT INTO pxr_book_manage.DATA_OPERATION
(
    book_id,
    type,
    actor_catalog_code, actor_catalog_version,
    app_catalog_code, app_catalog_version,
    wf_catalog_code, wf_catalog_version,
    attributes,
    is_disabled,
    created_by,
    created_at,
    updated_by,
    updated_at
)
VALUES
(
    1,
    'store',
    1000104,1,
    1000007,1,
    null,null,
    null,
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    1,
    'store',
    1000104,1,
    1000107,1,
    null,null,
    null,
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
);
INSERT INTO pxr_book_manage.DATA_OPERATION_DATA_TYPE
(
    data_operation_id,
    catalog_uuid,
    event_catalog_code,
    event_catalog_version,
    attributes,
    is_disabled,
    created_by,
    created_at,
    updated_by,
    updated_at
)
VALUES
(
    1,
    'event',
    1000007,
    1,
    null,
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
),
(
    2,
    'event',
    1000107,1,
    null,
    false,
    'pxr_user',
    NOW(),
    'pxr_user',
    NOW()
);