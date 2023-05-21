/** Copyright 2022 NEC Corporation
Released under the MIT license.
https://opensource.org/licenses/mit-license.php
*/
/* eslint-disable */
import { Server } from 'net';
/* eslint-enable */
import * as express from 'express';
import { ResponseCode } from '../common/ResponseCode';
import bodyParser = require('body-parser');

export default class StubCatalogServer {
    _app: express.Express;
    _server: Server;
    constructor (port: number, code: number, status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (code === 1000001) {
                    // 正常(pxr-root)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            name: '流通制御組織',
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            },
                            inherit: {
                                _value: '50',
                                _ver: '1'
                            },
                            description: '流通制御組織の定義です。'
                        },
                        template: {
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            },
                            'app-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの認定基準',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの監査手順',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            category: null,
                            'consumer-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの認定基準',
                                        content: {
                                            sentence: 'データコンシューマーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの監査手順',
                                        content: {
                                            sentence: 'データコンシューマーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'data-trader-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'identification-set': [
                                {
                                    element: {
                                        _value: 30001,
                                        _ver: 1
                                    }
                                }
                            ],
                            'main-block': {
                                _value: 1000110,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-root-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: {
                                        title: '事業概要',
                                        content: {
                                            sentence: 'データ取引組織の事業概要です。'
                                        }
                                    }
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: null,
                                    at: '20200101T000000.000+0900'
                                }
                            ],
                            'store-distribution-ratio': null,
                            'supply-distribution-ratio': null,
                            'wf-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの認定基準',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの監査手順',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            }
                        },
                        prop: [
                            {
                                key: 'app-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'アプリケーションプロバイダー認定'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: [
                                            'catalog/ext/test-org/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/model/category/share/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'consumer-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データコンシューマー認定'
                            },
                            {
                                key: 'data-trader-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データ取引サービスプロバイダー認定'
                            },
                            {
                                key: 'identification-set',
                                type: {
                                    of: 'inner[]',
                                    inner: 'Identification'
                                },
                                description: '採用した本人性確認事項の組み合わせ'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-root-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: '領域運営サービスプロバイダー認定'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '61',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus'
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'store-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '蓄積分配比率'
                            },
                            {
                                key: 'supply-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '提供分配比率'
                            },
                            {
                                key: 'wf-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'ワークフロープロバイダー認定'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000020) {
                    // 正常(data-trader)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/data-trader',
                            name: 'データ取引組織',
                            _code: {
                                _value: '1000020',
                                _ver: '1'
                            },
                            inherit: {
                                _value: '38',
                                _ver: '1'
                            },
                            description: 'データ取引組織の定義です。'
                        },
                        template: {
                            _code: {
                                _value: '1000020',
                                _ver: '1'
                            },
                            category: null,
                            'certify-consumer': true,
                            'consumer-alliance': [
                                {
                                    _value: 1000114,
                                    _ver: 1
                                }
                            ],
                            'create-book': true,
                            'main-block': {
                                _value: 1000109,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-root-alliance': [
                                {
                                    _value: 1000002,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: {
                                        title: '事業概要',
                                        content: {
                                            sentence: 'データ取引組織の事業概要です。'
                                        }
                                    }
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '20200101T000000.000+0900'
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: [
                                            'catalog/ext/test-org/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/model/category/share/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'certify-consumer',
                                type: {
                                    of: 'boolean'
                                },
                                description: 'Consumer認定権限有無'
                            },
                            {
                                key: 'consumer-alliance',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '37',
                                            _ver: '1'
                                        }
                                    }
                                },
                                description: '提携しているデータコンシューマーコード配列'
                            },
                            {
                                key: 'create-book',
                                type: {
                                    of: 'boolean'
                                },
                                description: 'Book開設権限有無'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-root-alliance',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '49',
                                            _ver: '1'
                                        }
                                    }
                                },
                                description: '提携している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '61',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus'
                                },
                                description: '認定の履歴'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000109) {
                    // 異常(data-trader、create-bookなし)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/block/data-trader',
                            name: 'Data-Trader-Block',
                            _code: {
                                _value: '1000109',
                                _ver: '1'
                            },
                            inherit: {
                                _value: '33',
                                _ver: null
                            },
                            description: 'データ取引サービスプロバイダー用PXR-Blockの定義です。'
                        },
                        template: {
                            _code: {
                                _value: '1000109',
                                _ver: '1'
                            },
                            'actor-type': 'pxr-root',
                            'assigned-organization': 'データ取引組織',
                            'assignment-status': 'assigned',
                            'base-url': '<未定>',
                            id: 'Data-Trader-01'
                        },
                        prop: [
                            {
                                key: 'actor-type',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null,
                                    candidata: {
                                        value: [
                                            'pxr-root',
                                            'region-root',
                                            'app',
                                            'wf',
                                            'data-trader',
                                            'consumer'
                                        ]
                                    }
                                },
                                description: 'このPXR-Blockを保有する組織の種別'
                            },
                            {
                                key: 'assigned-organization',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null
                                },
                                description: '割当アクター名'
                            },
                            {
                                key: 'assignment-status',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null,
                                    candidata: {
                                        value: [
                                            'assigned',
                                            'unassigned'
                                        ]
                                    }
                                },
                                description: '割当状態'
                            },
                            {
                                key: 'base-url',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null
                                },
                                description: 'PXR-BlockのベースURL'
                            },
                            {
                                key: 'id',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null
                                },
                                description: 'PXR-Block識別子'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1) {
                    // 異常(pxr-root、data-trader以外)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/model/dummy',
                            name: 'ユニットテスト',
                            _code: {
                                _value: '1',
                                _ver: '1'
                            },
                            inherit: null,
                            description: null
                        },
                        template: null,
                        prop: null,
                        attribute: null
                    });
                } else if (code === 2) {
                    // 異常(catalogItemがnull)
                    res.status(ResponseCode.OK).json({
                        catalogItem: null,
                        template: null,
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000374) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/setting/global',
                            name: 'PXR：グローバル設定',
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            inherit: {
                                _value: 160,
                                _ver: 1
                            },
                            description: 'PXR全体のグローバル設定の定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            'account-lock-count': 6,
                            'account-lock-release-time': {
                                type: 'minute',
                                value: 30
                            },
                            'app-p-name': 'アプリケーションプロバイダー',
                            'book-name': 'ヘルスケアNOTE',
                            'book-open-code-expiration': {
                                type: 'minute',
                                value: 10
                            },
                            'book-open-notification-interval': {
                                type: 'day',
                                value: 1
                            },
                            book_create_sms_message: '%s?ID=%s パスワード: %s',
                            'catalog-name': 'PXRカタログ',
                            'coin-name': 'PXRコイン',
                            'data-consumer-name': 'データコンシューマー',
                            'data-trader-name': 'データ取引サービスプロバイダー',
                            help_contact: {
                                title: 'ヘルプ・問い合わせ',
                                section: [
                                    {
                                        title: 'ヘルプ・問い合わせ',
                                        content: [
                                            {
                                                sentence: 'ヘルプ・問い合わせです。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'identity-verification-expiration': {
                                type: 'day',
                                value: 7
                            },
                            login_sms_message: 'PXRポータルのワンタイムログインコードは %s です。',
                            management_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            management_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_initial_login_description: {
                                title: '初回ログインURL通知文書説明',
                                section: [
                                    {
                                        title: '初回ログインURL通知文書説明',
                                        content: [
                                            {
                                                sentence: '初回ログインURL通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            management_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            management_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_password_similarity_check: true,
                            onboarding_start: {
                                title: 'Onboarding',
                                section: [
                                    {
                                        title: 'PXRエコシステムとは',
                                        content: [
                                            {
                                                sentence: 'PXRエコシステム説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            onboarding_store: {
                                title: 'データ蓄積設定',
                                section: [
                                    {
                                        title: 'データ蓄積設定',
                                        content: [
                                            {
                                                sentence: 'データ蓄積設定説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'one-time-login-code-expiration': null,
                            open_book_automatically: true,
                            'password-expiration': {
                                type: 'day',
                                value: 90
                            },
                            'password-generations-number': 4,
                            personal_account_delete: false,
                            personal_account_delete_ng_message: 'アカウント削除をご希望の場合はお問合せ下さい。',
                            personal_disassociation: true,
                            personal_initial_login_description: {
                                title: 'Book開設時のQRコード通知文書説明',
                                section: [
                                    {
                                        title: 'Book開設時のQRコード通知文書説明',
                                        content: [
                                            {
                                                sentence: 'Book開設時のQRコード通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            personal_share_basic_policy: false,
                            'personal_two-step_verification': true,
                            'portal-name': 'My PXR',
                            'pxr-root-name': '流通制御サービスプロバイダー',
                            pxr_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            pxr_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            pxr_id_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_similarity_check: true,
                            pxr_id_prefix: '',
                            pxr_id_suffix: '',
                            'region-root-name': '領域運営サービスプロバイダー',
                            search_target_ns: [
                                {
                                    name: 'データカテゴリ',
                                    ns: 'catalog/ext/aaa-healthcare-consortium/attribute/category/data'
                                }
                            ],
                            'service-name': 'サービス',
                            service_category_for_data_category: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    dataCategory: [
                                        {
                                            _value: 1000137,
                                            _ver: 1
                                        }
                                    ]
                                }
                            ],
                            service_category_for_workflow: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    workflow_p: {
                                        _value: 1000438,
                                        _ver: 1
                                    },
                                    workflow: {
                                        _value: 1000481,
                                        _ver: 1
                                    }
                                }
                            ],
                            'session-expiration': {
                                type: 'hour',
                                value: 3
                            },
                            'system-name': 'aaaデジタルヘルスプラットフォーム',
                            terms_of_service: {
                                title: '利用規約',
                                section: [
                                    {
                                        title: '利用規約',
                                        content: [
                                            {
                                                sentence: '利用規約です。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'use_app-p': true,
                            use_id_connect: true,
                            use_share: true,
                            use_supply: true,
                            'use_wf-p': true,
                            'wf-p-name': 'ワークフロープロバイダー',
                            'workflow-name': 'ワークフロー'
                        },
                        prop: [
                            {
                                key: 'account-lock-count',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アカウントロックまでの試行上限回数',
                                isInherit: true
                            },
                            {
                                key: 'account-lock-release-time',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'アカウントロック解除までの時間',
                                isInherit: true
                            },
                            {
                                key: 'app-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アプリケーションプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Book呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-open-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'book-open-notification-interval',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請通知間隔',
                                isInherit: true
                            },
                            {
                                key: 'book_create_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'Book作成時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'catalog-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Dataカタログ呼称',
                                isInherit: true
                            },
                            {
                                key: 'coin-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRコイン呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-consumer-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データコンシューマーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-trader-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データ取引サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'help_contact',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'ヘルプ・問い合わせ',
                                isInherit: true
                            },
                            {
                                key: 'identity-verification-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '本人性確認コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'login_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータルログイン時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '運営ポータル：初回ログインURL通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '運営ポータル群のパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_start',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル開始時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_store',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル蓄積設定時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'one-time-login-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワンタイムログインコード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'open_book_automatically',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '自動Book開設フラグ',
                                isInherit: true
                            },
                            {
                                key: 'password-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'パスワード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'password-generations-number',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'パスワード世代管理数',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：アカウント削除の可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete_ng_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル：アカウント削除できない設定時の表示メッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'personal_disassociation',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：連携解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'Book開設時のQRコード通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'personal_share_basic_policy',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：共有の基本方針可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_two-step_verification',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：2段階認証解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'portal-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '流通制御サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'PXR-IDのパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_prefix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのprefix',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_suffix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのsuffix',
                                isInherit: true
                            },
                            {
                                key: 'region-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '領域運営サービスプロバイダーの名称',
                                isInherit: true
                            },
                            {
                                key: 'search_target_ns',
                                type: {
                                    of: 'inner[]',
                                    inner: 'SearchTargetNs',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '検索対象ネームスペース',
                                isInherit: true
                            },
                            {
                                key: 'service-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'サービス名',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_data_category',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForDataCategory',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'データカテゴリ用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_workflow',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForWorkflow',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワークフロー用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'session-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'セッション有効期限',
                                isInherit: true
                            },
                            {
                                key: 'system-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRエコシステム基盤呼称',
                                isInherit: true
                            },
                            {
                                key: 'terms_of_service',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '利用規約',
                                isInherit: true
                            },
                            {
                                key: 'use_app-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'アプリケーションプロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_id_connect',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'IDサービスの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_share',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '共有の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_supply',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '提供の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_wf-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'ワークフロープロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'wf-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフロープロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'workflow-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフローの呼称',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    });
                }
                return;
            }
            res.status(status).end();
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.get('/catalog/:catalogItemCode/:catalogItemVersion', _listener);
        this._app.get('/catalog/:catalogItemCode', _listener);
        this._server = this._app.listen(port);
    }
}

export class StubCatalogServerNoIdService {
    _app: express.Express;
    _server: Server;
    constructor (port: number, code: number, status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (code === 1000001) {
                    // 正常(pxr-root)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            name: '流通制御組織',
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            },
                            inherit: {
                                _value: '50',
                                _ver: '1'
                            },
                            description: '流通制御組織の定義です。'
                        },
                        template: {
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            },
                            'app-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの認定基準',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの監査手順',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            category: null,
                            'consumer-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの認定基準',
                                        content: {
                                            sentence: 'データコンシューマーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの監査手順',
                                        content: {
                                            sentence: 'データコンシューマーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'data-trader-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'identification-set': [
                                {
                                    element: {
                                        _value: 30001,
                                        _ver: 1
                                    }
                                }
                            ],
                            'main-block': {
                                _value: 1000110,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-root-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: {
                                        title: '事業概要',
                                        content: {
                                            sentence: 'データ取引組織の事業概要です。'
                                        }
                                    }
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: null,
                                    at: '20200101T000000.000+0900'
                                }
                            ],
                            'store-distribution-ratio': null,
                            'supply-distribution-ratio': null,
                            'wf-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの認定基準',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの監査手順',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            }
                        },
                        prop: [
                            {
                                key: 'app-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'アプリケーションプロバイダー認定'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: [
                                            'catalog/ext/test-org/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/model/category/share/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'consumer-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データコンシューマー認定'
                            },
                            {
                                key: 'data-trader-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データ取引サービスプロバイダー認定'
                            },
                            {
                                key: 'identification-set',
                                type: {
                                    of: 'inner[]',
                                    inner: 'Identification'
                                },
                                description: '採用した本人性確認事項の組み合わせ'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-root-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: '領域運営サービスプロバイダー認定'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '61',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus'
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'store-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '蓄積分配比率'
                            },
                            {
                                key: 'supply-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '提供分配比率'
                            },
                            {
                                key: 'wf-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'ワークフロープロバイダー認定'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000020) {
                    // 正常(data-trader)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/data-trader',
                            name: 'データ取引組織',
                            _code: {
                                _value: '1000020',
                                _ver: '1'
                            },
                            inherit: {
                                _value: '38',
                                _ver: '1'
                            },
                            description: 'データ取引組織の定義です。'
                        },
                        template: {
                            _code: {
                                _value: '1000020',
                                _ver: '1'
                            },
                            category: null,
                            'certify-consumer': true,
                            'consumer-alliance': [
                                {
                                    _value: 1000114,
                                    _ver: 1
                                }
                            ],
                            'create-book': true,
                            'main-block': {
                                _value: 1000109,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-root-alliance': [
                                {
                                    _value: 1000002,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: {
                                        title: '事業概要',
                                        content: {
                                            sentence: 'データ取引組織の事業概要です。'
                                        }
                                    }
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '20200101T000000.000+0900'
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: [
                                            'catalog/ext/test-org/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/model/category/share/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'certify-consumer',
                                type: {
                                    of: 'boolean'
                                },
                                description: 'Consumer認定権限有無'
                            },
                            {
                                key: 'consumer-alliance',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '37',
                                            _ver: '1'
                                        }
                                    }
                                },
                                description: '提携しているデータコンシューマーコード配列'
                            },
                            {
                                key: 'create-book',
                                type: {
                                    of: 'boolean'
                                },
                                description: 'Book開設権限有無'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-root-alliance',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '49',
                                            _ver: '1'
                                        }
                                    }
                                },
                                description: '提携している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '61',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus'
                                },
                                description: '認定の履歴'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000109) {
                    // 異常(data-trader、create-bookなし)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/block/data-trader',
                            name: 'Data-Trader-Block',
                            _code: {
                                _value: '1000109',
                                _ver: '1'
                            },
                            inherit: {
                                _value: '33',
                                _ver: null
                            },
                            description: 'データ取引サービスプロバイダー用PXR-Blockの定義です。'
                        },
                        template: {
                            _code: {
                                _value: '1000109',
                                _ver: '1'
                            },
                            'actor-type': 'pxr-root',
                            'assigned-organization': 'データ取引組織',
                            'assignment-status': 'assigned',
                            'base-url': '<未定>',
                            id: 'Data-Trader-01'
                        },
                        prop: [
                            {
                                key: 'actor-type',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null,
                                    candidata: {
                                        value: [
                                            'pxr-root',
                                            'region-root',
                                            'app',
                                            'wf',
                                            'data-trader',
                                            'consumer'
                                        ]
                                    }
                                },
                                description: 'このPXR-Blockを保有する組織の種別'
                            },
                            {
                                key: 'assigned-organization',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null
                                },
                                description: '割当アクター名'
                            },
                            {
                                key: 'assignment-status',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null,
                                    candidata: {
                                        value: [
                                            'assigned',
                                            'unassigned'
                                        ]
                                    }
                                },
                                description: '割当状態'
                            },
                            {
                                key: 'base-url',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null
                                },
                                description: 'PXR-BlockのベースURL'
                            },
                            {
                                key: 'id',
                                type: {
                                    of: 'string',
                                    format: null,
                                    unit: null
                                },
                                description: 'PXR-Block識別子'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1) {
                    // 異常(pxr-root、data-trader以外)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/model/dummy',
                            name: 'ユニットテスト',
                            _code: {
                                _value: '1',
                                _ver: '1'
                            },
                            inherit: null,
                            description: null
                        },
                        template: null,
                        prop: null,
                        attribute: null
                    });
                } else if (code === 2) {
                    // 異常(catalogItemがnull)
                    res.status(ResponseCode.OK).json({
                        catalogItem: null,
                        template: null,
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000374) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/setting/global',
                            name: 'PXR：グローバル設定',
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            inherit: {
                                _value: 160,
                                _ver: 1
                            },
                            description: 'PXR全体のグローバル設定の定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            'account-lock-count': 6,
                            'account-lock-release-time': {
                                type: 'minute',
                                value: 30
                            },
                            'app-p-name': 'アプリケーションプロバイダー',
                            'book-name': 'ヘルスケアNOTE',
                            'book-open-code-expiration': {
                                type: 'minute',
                                value: 10
                            },
                            'book-open-notification-interval': {
                                type: 'day',
                                value: 1
                            },
                            book_create_sms_message: '%s?ID=%s パスワード: %s',
                            'catalog-name': 'PXRカタログ',
                            'coin-name': 'PXRコイン',
                            'data-consumer-name': 'データコンシューマー',
                            'data-trader-name': 'データ取引サービスプロバイダー',
                            help_contact: {
                                title: 'ヘルプ・問い合わせ',
                                section: [
                                    {
                                        title: 'ヘルプ・問い合わせ',
                                        content: [
                                            {
                                                sentence: 'ヘルプ・問い合わせです。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'identity-verification-expiration': {
                                type: 'day',
                                value: 7
                            },
                            login_sms_message: 'PXRポータルのワンタイムログインコードは %s です。',
                            management_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            management_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_initial_login_description: {
                                title: '初回ログインURL通知文書説明',
                                section: [
                                    {
                                        title: '初回ログインURL通知文書説明',
                                        content: [
                                            {
                                                sentence: '初回ログインURL通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            management_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            management_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_password_similarity_check: true,
                            onboarding_start: {
                                title: 'Onboarding',
                                section: [
                                    {
                                        title: 'PXRエコシステムとは',
                                        content: [
                                            {
                                                sentence: 'PXRエコシステム説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            onboarding_store: {
                                title: 'データ蓄積設定',
                                section: [
                                    {
                                        title: 'データ蓄積設定',
                                        content: [
                                            {
                                                sentence: 'データ蓄積設定説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'one-time-login-code-expiration': null,
                            open_book_automatically: true,
                            'password-expiration': {
                                type: 'day',
                                value: 90
                            },
                            'password-generations-number': 4,
                            personal_account_delete: false,
                            personal_account_delete_ng_message: 'アカウント削除をご希望の場合はお問合せ下さい。',
                            personal_disassociation: true,
                            personal_initial_login_description: {
                                title: 'Book開設時のQRコード通知文書説明',
                                section: [
                                    {
                                        title: 'Book開設時のQRコード通知文書説明',
                                        content: [
                                            {
                                                sentence: 'Book開設時のQRコード通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            personal_share_basic_policy: false,
                            'personal_two-step_verification': true,
                            'portal-name': 'My PXR',
                            'pxr-root-name': '流通制御サービスプロバイダー',
                            pxr_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            pxr_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            pxr_id_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_similarity_check: true,
                            pxr_id_prefix: '',
                            pxr_id_suffix: '',
                            'region-root-name': '領域運営サービスプロバイダー',
                            search_target_ns: [
                                {
                                    name: 'データカテゴリ',
                                    ns: 'catalog/ext/aaa-healthcare-consortium/attribute/category/data'
                                }
                            ],
                            'service-name': 'サービス',
                            service_category_for_data_category: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    dataCategory: [
                                        {
                                            _value: 1000137,
                                            _ver: 1
                                        }
                                    ]
                                }
                            ],
                            service_category_for_workflow: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    workflow_p: {
                                        _value: 1000438,
                                        _ver: 1
                                    },
                                    workflow: {
                                        _value: 1000481,
                                        _ver: 1
                                    }
                                }
                            ],
                            'session-expiration': {
                                type: 'hour',
                                value: 3
                            },
                            'system-name': 'aaaデジタルヘルスプラットフォーム',
                            terms_of_service: {
                                title: '利用規約',
                                section: [
                                    {
                                        title: '利用規約',
                                        content: [
                                            {
                                                sentence: '利用規約です。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'use_app-p': true,
                            use_id_connect: false,
                            use_share: true,
                            use_supply: true,
                            'use_wf-p': true,
                            'wf-p-name': 'ワークフロープロバイダー',
                            'workflow-name': 'ワークフロー'
                        },
                        prop: [
                            {
                                key: 'account-lock-count',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アカウントロックまでの試行上限回数',
                                isInherit: true
                            },
                            {
                                key: 'account-lock-release-time',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'アカウントロック解除までの時間',
                                isInherit: true
                            },
                            {
                                key: 'app-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アプリケーションプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Book呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-open-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'book-open-notification-interval',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請通知間隔',
                                isInherit: true
                            },
                            {
                                key: 'book_create_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'Book作成時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'catalog-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Dataカタログ呼称',
                                isInherit: true
                            },
                            {
                                key: 'coin-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRコイン呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-consumer-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データコンシューマーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-trader-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データ取引サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'help_contact',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'ヘルプ・問い合わせ',
                                isInherit: true
                            },
                            {
                                key: 'identity-verification-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '本人性確認コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'login_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータルログイン時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '運営ポータル：初回ログインURL通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '運営ポータル群のパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_start',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル開始時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_store',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル蓄積設定時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'one-time-login-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワンタイムログインコード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'open_book_automatically',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '自動Book開設フラグ',
                                isInherit: true
                            },
                            {
                                key: 'password-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'パスワード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'password-generations-number',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'パスワード世代管理数',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：アカウント削除の可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete_ng_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル：アカウント削除できない設定時の表示メッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'personal_disassociation',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：連携解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'Book開設時のQRコード通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'personal_share_basic_policy',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：共有の基本方針可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_two-step_verification',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：2段階認証解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'portal-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '流通制御サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'PXR-IDのパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_prefix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのprefix',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_suffix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのsuffix',
                                isInherit: true
                            },
                            {
                                key: 'region-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '領域運営サービスプロバイダーの名称',
                                isInherit: true
                            },
                            {
                                key: 'search_target_ns',
                                type: {
                                    of: 'inner[]',
                                    inner: 'SearchTargetNs',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '検索対象ネームスペース',
                                isInherit: true
                            },
                            {
                                key: 'service-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'サービス名',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_data_category',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForDataCategory',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'データカテゴリ用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_workflow',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForWorkflow',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワークフロー用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'session-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'セッション有効期限',
                                isInherit: true
                            },
                            {
                                key: 'system-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRエコシステム基盤呼称',
                                isInherit: true
                            },
                            {
                                key: 'terms_of_service',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '利用規約',
                                isInherit: true
                            },
                            {
                                key: 'use_app-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'アプリケーションプロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_id_connect',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'IDサービスの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_share',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '共有の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_supply',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '提供の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_wf-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'ワークフロープロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'wf-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフロープロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'workflow-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフローの呼称',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    });
                }
                return;
            }
            res.status(status).end();
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.get('/catalog/:catalogItemCode/:catalogItemVersion', _listener);
        this._app.get('/catalog/:catalogItemCode', _listener);
        this._server = this._app.listen(port);
    }
}

export class StubCatalogServer05 {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        this._app = express();

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                res.status(200);
                // アクター確認
                if (code === 1000001) {
                    res.json({
                        catalogItem: {
                            ns: '/pxr-root'
                        }
                    });
                } else if (code === 1000020) {
                    res.json({
                        catalogItem: {
                            ns: '/data-trader'
                        },
                        template: {
                            'create-book': true
                        }
                    });
                } else if (code === 1001003) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1001006,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001005) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1001007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000004) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000014) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000017,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000104) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000114) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000117,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000204) {
                    res.json({
                        catalogItem: {
                            ns: '/data-trader'
                        }
                    });
                } else if (code === 1000304) {
                    res.json({
                        template: {
                            ns: '/data-trader'
                        }
                    });
                } else if (code === 1000404) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                        }
                    });
                } else if (code === 1000504) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000017,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000604) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                        }
                    });
                } else if (code === 1000704) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000017,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000804) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000027,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000904) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000037,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001004) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000047,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000007) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000017) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                            ]
                        }
                    });
                } else if (code === 1000027) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000026,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000037) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000036,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000047) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000016,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000107) {
                    res.json({
                        catalogItem: {
                            ns: '/application'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000106,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000117) {
                    res.json({
                        catalogItem: {
                            ns: '/application'
                        },
                        template: {
                            store: [
                            ]
                        }
                    });
                } else if (code === 1000026) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                            ]
                        }
                    });
                } else if (code === 1000036) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    _value: 9999,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001006) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1001106,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001007) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1001107,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001106) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000000,
                                        _ver: 1
                                    }],
                                    thing: [{
                                        _value: 1000047,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1001107) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000009,
                                        _ver: 2
                                    }],
                                    thing: [{
                                        _value: 1000047,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1000006) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000009,
                                        _ver: 1
                                    }],
                                    thing: [{
                                        _value: 1000047,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1000016) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000019,
                                        _ver: 1
                                    }],
                                    thing: [{
                                        _value: 1000047,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1000106) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000105,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000109,
                                        _ver: 1
                                    }],
                                    thing: [{
                                        _value: 1000147,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1000009) {
                    res.json({
                        catalogItem: {
                            ns: '/event'
                        },
                        prop: [
                            {
                                key: 'code',
                                type: {
                                    of: 'item',
                                    _code: {
                                        _value: '18',
                                        _ver: '1'
                                    },
                                    candidate: null
                                },
                                description: 'イベント種別'
                            },
                            {
                                key: 'thing',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '1000014',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'モノの配列'
                            }
                        ]
                    });
                } else if (code === 1000019) {
                    res.json({
                        catalogItem: {
                            ns: '/event'
                        },
                        prop: [
                            {
                                key: 'thing',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: 'モノの配列'
                            }
                        ]
                    });
                } else if (code === 1000109) {
                    res.json({
                        catalogItem: {
                            ns: '/event'
                        },
                        prop: [
                            {
                                key: 'code',
                                type: {
                                    of: 'item',
                                    _code: {
                                        _value: '18',
                                        _ver: '1'
                                    },
                                    candidate: null
                                },
                                description: 'イベント種別'
                            },
                            {
                                key: 'thing',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '1000114',
                                                _ver: '1'
                                            },
                                            {
                                                _value: '1000115',
                                                _ver: '1'
                                            },
                                            {
                                                _value: '1000116',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'モノの配列'
                            }
                        ]
                    });
                }
            }
            res.status(status).end();
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/:code/:version', _listener);
        this._app.get('/catalog/:code', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerReleaseCooperate {
    _app: express.Express;
    _server: Server;
    constructor (status: number, kind: number, idService: boolean = false) {
        this._app = express();
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (code === 1000374) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/setting/global',
                            name: 'PXR：グローバル設定',
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            inherit: {
                                _value: 160,
                                _ver: 1
                            },
                            description: 'PXR全体のグローバル設定の定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            'account-lock-count': 6,
                            'account-lock-release-time': {
                                type: 'minute',
                                value: 30
                            },
                            'app-p-name': 'アプリケーションプロバイダー',
                            'book-name': 'ヘルスケアNOTE',
                            'book-open-code-expiration': {
                                type: 'minute',
                                value: 10
                            },
                            'book-open-notification-interval': {
                                type: 'day',
                                value: 1
                            },
                            book_create_sms_message: '%s?ID=%s パスワード: %s',
                            'catalog-name': 'PXRカタログ',
                            'coin-name': 'PXRコイン',
                            'data-consumer-name': 'データコンシューマー',
                            'data-trader-name': 'データ取引サービスプロバイダー',
                            help_contact: {
                                title: 'ヘルプ・問い合わせ',
                                section: [
                                    {
                                        title: 'ヘルプ・問い合わせ',
                                        content: [
                                            {
                                                sentence: 'ヘルプ・問い合わせです。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'identity-verification-expiration': {
                                type: 'day',
                                value: 7
                            },
                            login_sms_message: 'PXRポータルのワンタイムログインコードは %s です。',
                            management_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            management_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_initial_login_description: {
                                title: '初回ログインURL通知文書説明',
                                section: [
                                    {
                                        title: '初回ログインURL通知文書説明',
                                        content: [
                                            {
                                                sentence: '初回ログインURL通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            management_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            management_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_password_similarity_check: true,
                            onboarding_start: {
                                title: 'Onboarding',
                                section: [
                                    {
                                        title: 'PXRエコシステムとは',
                                        content: [
                                            {
                                                sentence: 'PXRエコシステム説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            onboarding_store: {
                                title: 'データ蓄積設定',
                                section: [
                                    {
                                        title: 'データ蓄積設定',
                                        content: [
                                            {
                                                sentence: 'データ蓄積設定説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'one-time-login-code-expiration': null,
                            open_book_automatically: true,
                            'password-expiration': {
                                type: 'day',
                                value: 90
                            },
                            'password-generations-number': 4,
                            personal_account_delete: false,
                            personal_account_delete_ng_message: 'アカウント削除をご希望の場合はお問合せ下さい。',
                            personal_disassociation: true,
                            personal_initial_login_description: {
                                title: 'Book開設時のQRコード通知文書説明',
                                section: [
                                    {
                                        title: 'Book開設時のQRコード通知文書説明',
                                        content: [
                                            {
                                                sentence: 'Book開設時のQRコード通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            personal_share_basic_policy: false,
                            'personal_two-step_verification': true,
                            'portal-name': 'My PXR',
                            'pxr-root-name': '流通制御サービスプロバイダー',
                            pxr_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            pxr_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            pxr_id_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_similarity_check: true,
                            pxr_id_prefix: '',
                            pxr_id_suffix: '',
                            'region-root-name': '領域運営サービスプロバイダー',
                            search_target_ns: [
                                {
                                    name: 'データカテゴリ',
                                    ns: 'catalog/ext/aaa-healthcare-consortium/attribute/category/data'
                                }
                            ],
                            'service-name': 'サービス',
                            service_category_for_data_category: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    dataCategory: [
                                        {
                                            _value: 1000137,
                                            _ver: 1
                                        }
                                    ]
                                }
                            ],
                            service_category_for_workflow: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    workflow_p: {
                                        _value: 1000438,
                                        _ver: 1
                                    },
                                    workflow: {
                                        _value: 1000481,
                                        _ver: 1
                                    }
                                }
                            ],
                            'session-expiration': {
                                type: 'hour',
                                value: 3
                            },
                            'system-name': 'aaaデジタルヘルスプラットフォーム',
                            terms_of_service: {
                                title: '利用規約',
                                section: [
                                    {
                                        title: '利用規約',
                                        content: [
                                            {
                                                sentence: '利用規約です。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'use_app-p': true,
                            use_id_connect: idService,
                            use_share: true,
                            use_supply: true,
                            'use_wf-p': true,
                            'wf-p-name': 'ワークフロープロバイダー',
                            'workflow-name': 'ワークフロー'
                        },
                        prop: [
                            {
                                key: 'account-lock-count',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アカウントロックまでの試行上限回数',
                                isInherit: true
                            },
                            {
                                key: 'account-lock-release-time',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'アカウントロック解除までの時間',
                                isInherit: true
                            },
                            {
                                key: 'app-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アプリケーションプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Book呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-open-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'book-open-notification-interval',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請通知間隔',
                                isInherit: true
                            },
                            {
                                key: 'book_create_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'Book作成時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'catalog-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Dataカタログ呼称',
                                isInherit: true
                            },
                            {
                                key: 'coin-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRコイン呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-consumer-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データコンシューマーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-trader-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データ取引サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'help_contact',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'ヘルプ・問い合わせ',
                                isInherit: true
                            },
                            {
                                key: 'identity-verification-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '本人性確認コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'login_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータルログイン時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '運営ポータル：初回ログインURL通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '運営ポータル群のパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_start',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル開始時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_store',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル蓄積設定時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'one-time-login-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワンタイムログインコード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'open_book_automatically',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '自動Book開設フラグ',
                                isInherit: true
                            },
                            {
                                key: 'password-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'パスワード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'password-generations-number',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'パスワード世代管理数',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：アカウント削除の可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete_ng_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル：アカウント削除できない設定時の表示メッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'personal_disassociation',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：連携解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'Book開設時のQRコード通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'personal_share_basic_policy',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：共有の基本方針可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_two-step_verification',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：2段階認証解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'portal-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '流通制御サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'PXR-IDのパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_prefix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのprefix',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_suffix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのsuffix',
                                isInherit: true
                            },
                            {
                                key: 'region-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '領域運営サービスプロバイダーの名称',
                                isInherit: true
                            },
                            {
                                key: 'search_target_ns',
                                type: {
                                    of: 'inner[]',
                                    inner: 'SearchTargetNs',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '検索対象ネームスペース',
                                isInherit: true
                            },
                            {
                                key: 'service-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'サービス名',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_data_category',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForDataCategory',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'データカテゴリ用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_workflow',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForWorkflow',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワークフロー用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'session-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'セッション有効期限',
                                isInherit: true
                            },
                            {
                                key: 'system-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRエコシステム基盤呼称',
                                isInherit: true
                            },
                            {
                                key: 'terms_of_service',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '利用規約',
                                isInherit: true
                            },
                            {
                                key: 'use_app-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'アプリケーションプロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_id_connect',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'IDサービスの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_share',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '共有の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_supply',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '提供の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_wf-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'ワークフロープロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'wf-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフロープロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'workflow-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフローの呼称',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    });
                } else if (kind === 0) {
                    // 正常(pxr-root)
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: '/pxr-root'
                        },
                        template: {
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            }
                        }
                    });
                } else if (kind === 1) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (kind === 2) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (kind === 3) {
                    res.json({
                        catalogItem: {
                            ns: '/region-root'
                        },
                        template: {
                            region: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (kind === 4) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: null
                    });
                } else if (kind === 5) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: null
                    });
                } else if (kind === 6) {
                    // templateなし
                    res.json({
                        catalogItem: {
                            ns: '/region-root'
                        },
                        template: null
                    });
                } else if (kind === 7) {
                    // templateなし
                    res.json({
                        catalogItem: {
                            ns: '/data-trader'
                        },
                        template: null
                    });
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/:code', _listener);
        this._app.get('/catalog/:code/:version', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerReleaseCooperateError {
    _app: express.Express;
    _server: Server;
    constructor (status: number, kind: number) {
        this._app = express();
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (kind === 0) {
                    // 正常(pxr-root)
                    res.status(ResponseCode.OK).json({
                        template: {
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            }
                        }
                    });
                } else if (kind === 1) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                        }
                    });
                } else if (kind === 2) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                        }
                    });
                } else if (kind === 3) {
                    res.json({
                        catalogItem: {
                            ns: '/region-root'
                        },
                        template: {
                            region: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/:code', _listener);
        this._app.get('/catalog/:code/:version', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerGetCooperate {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        this._app = express();

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                if (code === 1000001) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000001,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000004) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000004,
                                _ver: 2
                            }
                        }
                    });
                } else if (code === 1000007) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000007,
                                _ver: 3
                            }
                        }
                    });
                } else if (code === 1000107) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000107,
                                _ver: 4
                            }
                        }
                    });
                } else if (code === 1000011) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000001,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000014) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000004,
                                _ver: 2
                            }
                        }
                    });
                } else if (code === 1000017) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000007,
                                _ver: 3
                            }
                        }
                    });
                } else if (code === 1000117) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000107,
                                _ver: 4
                            }
                        }
                    });
                } else if (code === 1000207) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000207,
                                _ver: 4
                            }
                        }
                    });
                } else if (code === 1000217) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000207,
                                _ver: 4
                            }
                        }
                    });
                } else {
                    res.status(404);
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/:code', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerBookClose {
    _app: express.Express;
    _server: Server;
    constructor (status: number, code: number, idService: boolean = true, traderFlg: boolean = false) {
        this._app = express();

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const ns = req.query['ns'];
            res.status(status);
            if (traderFlg && ns === 'catalog/ext/aaa-healthcare-consortium/actor/data-trader') {
                res.json(
                    [
                        {
                            catalogItem: {
                                _code: {
                                    _value: code,
                                    _ver: 1
                                }
                            }
                        }
                    ]
                );
            } else if (ns === 'catalog/ext/aaa-healthcare-consortium/setting/actor/pxr-root/actor_1000001') {
                res.json(
                    [
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/setting/actor/pxr-root/actor_1000001',
                                name: '流通制御組織：アクター個別設定',
                                _code: {
                                    _value: 1000362,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 130,
                                    _ver: 1
                                },
                                description: '流通制御組織による流通制御組織のアクター個別設定の定義です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000362,
                                    _ver: 1
                                },
                                auth: [
                                    {
                                        _value: 139,
                                        _ver: 1
                                    },
                                    {
                                        _value: 140,
                                        _ver: 1
                                    },
                                    {
                                        _value: 141,
                                        _ver: 1
                                    },
                                    {
                                        _value: 142,
                                        _ver: 1
                                    },
                                    {
                                        _value: 144,
                                        _ver: 1
                                    },
                                    {
                                        _value: 147,
                                        _ver: 1
                                    },
                                    {
                                        _value: 149,
                                        _ver: 1
                                    },
                                    {
                                        _value: 155,
                                        _ver: 1
                                    }
                                ],
                                'identification-checklist': [
                                    {
                                        _value: 30019,
                                        _ver: 1
                                    },
                                    {
                                        _value: 30020,
                                        _ver: 1
                                    },
                                    {
                                        _value: 30021,
                                        _ver: 1
                                    },
                                    {
                                        _value: 30022,
                                        _ver: 1
                                    },
                                    {
                                        _value: 30035,
                                        _ver: 1
                                    }
                                ],
                                'identification-document': [
                                    {
                                        document: {
                                            _value: 30001,
                                            _ver: 1
                                        },
                                        'satisfaction-rate': 100
                                    }
                                ],
                                'pxr-root-name': '流通制御サービスプロバイダー',
                                'store-distribution-ratio': null,
                                'supply-distribution-ratio': null
                            },
                            prop: [
                                {
                                    key: 'auth',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: [
                                                'catalog/model/auth/*'
                                            ],
                                            _code: null,
                                            base: null
                                        }
                                    },
                                    description: '操作権の配列',
                                    isInherit: true
                                },
                                {
                                    key: 'identification-checklist',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: [
                                                'catalog/model/person/item-type',
                                                'catalog/built_in/person/item-type',
                                                'catalog/ext/test-org/person/item-type'
                                            ],
                                            _code: null,
                                            base: null
                                        }
                                    },
                                    description: '採用した本人性確認事項',
                                    isInherit: true
                                },
                                {
                                    key: 'identification-document',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'Identification-document',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: '採用した本人性確認書類',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr-root-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '流通制御サービスプロバイダーの呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'store-distribution-ratio',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'DistributionRatio',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: '蓄積分配比率',
                                    isInherit: true
                                },
                                {
                                    key: 'supply-distribution-ratio',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'DistributionRatio',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: '提供分配比率',
                                    isInherit: true
                                }
                            ],
                            attribute: null
                        }
                    ]
                );
            } else if (ns === 'catalog/ext/aaa-healthcare-consortium/setting/global') {
                res.json([
                    {
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/setting/global',
                            name: 'PXR：グローバル設定',
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            inherit: {
                                _value: 160,
                                _ver: 1
                            },
                            description: 'PXR全体のグローバル設定の定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            'account-lock-count': 6,
                            'account-lock-release-time': {
                                type: 'minute',
                                value: 30
                            },
                            'app-p-name': 'アプリケーションプロバイダー',
                            'book-name': 'ヘルスケアNOTE',
                            'book-open-code-expiration': {
                                type: 'minute',
                                value: 10
                            },
                            'book-open-notification-interval': {
                                type: 'day',
                                value: 1
                            },
                            book_create_sms_message: '%s?ID=%s パスワード: %s',
                            'catalog-name': 'PXRカタログ',
                            'coin-name': 'PXRコイン',
                            'data-consumer-name': 'データコンシューマー',
                            'data-trader-name': 'データ取引サービスプロバイダー',
                            help_contact: {
                                title: 'ヘルプ・問い合わせ',
                                section: [
                                    {
                                        title: 'ヘルプ・問い合わせ',
                                        content: [
                                            {
                                                sentence: 'ヘルプ・問い合わせです。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'identity-verification-expiration': {
                                type: 'day',
                                value: 7
                            },
                            login_sms_message: 'PXRポータルのワンタイムログインコードは %s です。',
                            management_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            management_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_initial_login_description: {
                                title: '初回ログインURL通知文書説明',
                                section: [
                                    {
                                        title: '初回ログインURL通知文書説明',
                                        content: [
                                            {
                                                sentence: '初回ログインURL通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            management_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            management_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_password_similarity_check: true,
                            onboarding_start: {
                                title: 'Onboarding',
                                section: [
                                    {
                                        title: 'PXRエコシステムとは',
                                        content: [
                                            {
                                                sentence: 'PXRエコシステム説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            onboarding_store: {
                                title: 'データ蓄積設定',
                                section: [
                                    {
                                        title: 'データ蓄積設定',
                                        content: [
                                            {
                                                sentence: 'データ蓄積設定説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'one-time-login-code-expiration': null,
                            open_book_automatically: true,
                            'password-expiration': {
                                type: 'day',
                                value: 90
                            },
                            'password-generations-number': 4,
                            personal_account_delete: false,
                            personal_account_delete_ng_message: 'アカウント削除をご希望の場合はお問合せ下さい。',
                            personal_disassociation: true,
                            personal_initial_login_description: {
                                title: 'Book開設時のQRコード通知文書説明',
                                section: [
                                    {
                                        title: 'Book開設時のQRコード通知文書説明',
                                        content: [
                                            {
                                                sentence: 'Book開設時のQRコード通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            personal_share_basic_policy: false,
                            'personal_two-step_verification': true,
                            'portal-name': 'My PXR',
                            'pxr-root-name': '流通制御サービスプロバイダー',
                            pxr_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            pxr_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            pxr_id_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_similarity_check: true,
                            pxr_id_prefix: '',
                            pxr_id_suffix: '',
                            'region-root-name': '領域運営サービスプロバイダー',
                            'region-tou_re-consent_notification_interval': {
                                value: 7,
                                type: 'days'
                            },
                            search_target_ns: [
                                {
                                    name: 'データカテゴリ',
                                    ns: 'catalog/ext/aaa-healthcare-consortium/attribute/category/data'
                                }
                            ],
                            'service-name': 'サービス',
                            service_category_for_data_category: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    dataCategory: [
                                        {
                                            _value: 1000137,
                                            _ver: 1
                                        }
                                    ]
                                }
                            ],
                            service_category_for_workflow: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    workflow_p: {
                                        _value: 1000438,
                                        _ver: 1
                                    },
                                    workflow: {
                                        _value: 1000481,
                                        _ver: 1
                                    }
                                }
                            ],
                            'session-expiration': {
                                type: 'hour',
                                value: 3
                            },
                            'system-name': 'aaaデジタルヘルスプラットフォーム',
                            terms_of_service: {
                                title: '利用規約',
                                section: [
                                    {
                                        title: '利用規約',
                                        content: [
                                            {
                                                sentence: '利用規約です。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'use_app-p': true,
                            use_id_connect: idService,
                            use_share: true,
                            use_supply: true,
                            'use_wf-p': true,
                            'wf-p-name': 'ワークフロープロバイダー',
                            'workflow-name': 'ワークフロー'
                        },
                        prop: [
                            {
                                key: 'account-lock-count',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アカウントロックまでの試行上限回数',
                                isInherit: true
                            },
                            {
                                key: 'account-lock-release-time',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'アカウントロック解除までの時間',
                                isInherit: true
                            },
                            {
                                key: 'app-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アプリケーションプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Book呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-open-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'book-open-notification-interval',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請通知間隔',
                                isInherit: true
                            },
                            {
                                key: 'book_create_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'Book作成時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'catalog-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Dataカタログ呼称',
                                isInherit: true
                            },
                            {
                                key: 'coin-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRコイン呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-consumer-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データコンシューマーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-trader-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データ取引サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'help_contact',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'ヘルプ・問い合わせ',
                                isInherit: true
                            },
                            {
                                key: 'identity-verification-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '本人性確認コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'login_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータルログイン時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '運営ポータル：初回ログインURL通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '運営ポータル群のパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_start',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル開始時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_store',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル蓄積設定時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'one-time-login-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワンタイムログインコード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'open_book_automatically',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '自動Book開設フラグ',
                                isInherit: true
                            },
                            {
                                key: 'password-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'パスワード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'password-generations-number',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'パスワード世代管理数',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：アカウント削除の可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete_ng_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル：アカウント削除できない設定時の表示メッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'personal_disassociation',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：連携解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'Book開設時のQRコード通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'personal_share_basic_policy',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：共有の基本方針可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_two-step_verification',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：2段階認証解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'portal-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '流通制御サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'PXR-IDのパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_prefix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのprefix',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_suffix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのsuffix',
                                isInherit: true
                            },
                            {
                                key: 'region-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '領域運営サービスプロバイダーの名称',
                                isInherit: true
                            },
                            {
                                key: 'search_target_ns',
                                type: {
                                    of: 'inner[]',
                                    inner: 'SearchTargetNs',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '検索対象ネームスペース',
                                isInherit: true
                            },
                            {
                                key: 'service-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'サービス名',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_data_category',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForDataCategory',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'データカテゴリ用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_workflow',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForWorkflow',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワークフロー用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'session-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'セッション有効期限',
                                isInherit: true
                            },
                            {
                                key: 'system-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRエコシステム基盤呼称',
                                isInherit: true
                            },
                            {
                                key: 'terms_of_service',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '利用規約',
                                isInherit: true
                            },
                            {
                                key: 'use_app-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'アプリケーションプロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_id_connect',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'IDサービスの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_share',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '共有の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_supply',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '提供の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_wf-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'ワークフロープロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'wf-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフロープロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'workflow-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフローの呼称',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    }
                ]);
            }
            res.end();
        };

        const _extName = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
            }
            res.status(status).end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/name', _extName);
        this._app.get('/catalog', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogForAccessLog {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === ResponseCode.OK) {
                if (code === 1000001) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            name: '流通制御組織',
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            },
                            inherit: {
                                _value: '50',
                                _ver: '1'
                            },
                            description: '流通制御組織の定義です。'
                        },
                        template: {
                            _code: {
                                _value: '1000001',
                                _ver: '1'
                            },
                            'app-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの認定基準',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの監査手順',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            category: null,
                            'consumer-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの認定基準',
                                        content: {
                                            sentence: 'データコンシューマーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの監査手順',
                                        content: {
                                            sentence: 'データコンシューマーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'data-trader-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'identification-set': [
                                {
                                    element: {
                                        _value: 30001,
                                        _ver: 1
                                    }
                                }
                            ],
                            'main-block': {
                                _value: 1000110,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-root-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: {
                                        title: '事業概要',
                                        content: {
                                            sentence: 'データ取引組織の事業概要です。'
                                        }
                                    }
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: null,
                                    at: '20200101T000000.000+0900'
                                }
                            ],
                            'store-distribution-ratio': null,
                            'supply-distribution-ratio': null,
                            'wf-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの認定基準',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの監査手順',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            }
                        },
                        prop: [
                            {
                                key: 'app-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'アプリケーションプロバイダー認定'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: [
                                            'catalog/ext/test-org/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/model/category/share/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'consumer-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データコンシューマー認定'
                            },
                            {
                                key: 'data-trader-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データ取引サービスプロバイダー認定'
                            },
                            {
                                key: 'identification-set',
                                type: {
                                    of: 'inner[]',
                                    inner: 'Identification'
                                },
                                description: '採用した本人性確認事項の組み合わせ'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-root-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: '領域運営サービスプロバイダー認定'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '61',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus'
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'store-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '蓄積分配比率'
                            },
                            {
                                key: 'supply-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '提供分配比率'
                            },
                            {
                                key: 'wf-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'ワークフロープロバイダー認定'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000117) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/wf',
                            name: 'PJ①－3)虚弱高齢者見守り研究',
                            _code: {
                                _value: 1000117,
                                _ver: 1
                            },
                            inherit: {
                                _value: 47,
                                _ver: 1
                            },
                            description: '平均寿命と健康寿命の差を短縮し、認知症を予防できるようなスマートエイジング社会を実現することを目指した研究であり、特に都市部の独居の身体的虚弱高齢者や軽度認知障害高齢者の身体的不活発や認知的不活発、睡眠障害に対する予防的介入や、屋内での熱疲労などの予防的な健康管理の仕組みを構築します。'
                        },
                        template: {
                            _code: {
                                _value: 1000117,
                                _ver: 1
                            },
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000115,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000116,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'PJ①－3)虚弱高齢者見守り研究の組織ステートメントです。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            workflow: [
                                {
                                    _value: 1000120,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'breakaway-flg',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '離脱フラグ'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: [
                                            'catalog/model/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/ext/test-org/category/supply/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'information-site',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '情報サイト'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-alliance',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 48,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '参加している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'workflow',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 46,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'ワークフロー定義の配列'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000004) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/wf',
                            name: 'テスト用ワークフロー',
                            _code: {
                                _value: 1000004,
                                _ver: 1
                            },
                            inherit: {
                                _value: 47,
                                _ver: 1
                            },
                            description: 'テスト用ワークフローです'
                        },
                        template: {
                            _code: {
                                _value: 1000004,
                                _ver: 1
                            },
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000112,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000003,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'テスト用ワークフローの組織ステートメントです。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            workflow: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'breakaway-flg',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '離脱フラグ'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: [
                                            'catalog/model/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/ext/test-org/category/supply/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'information-site',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '情報サイト'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-alliance',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 48,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '参加している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'workflow',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 46,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'ワークフロー定義の配列'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000070) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/wf',
                            name: 'テスト用リージョンステートメントC',
                            _code: {
                                _value: 1000070,
                                _ver: 1
                            },
                            inherit: {
                                _value: 47,
                                _ver: 1
                            },
                            description: 'テスト用リージョンステートメントCの概要'
                        },
                        template: {
                            _code: {
                                _value: 1000070,
                                _ver: 1
                            },
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000113,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'テスト用リージョンステートメントCの組織ステートメントです。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            workflow: [
                                {
                                    _value: 1000073,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'breakaway-flg',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '離脱フラグ'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: [
                                            'catalog/model/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/ext/test-org/category/supply/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'information-site',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '情報サイト'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-alliance',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 48,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '参加している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'workflow',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 46,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'ワークフロー定義の配列'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1001117) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/app',
                            name: 'テストアプリ',
                            _code: {
                                _value: 1001117,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            _code: {
                                _value: 1001117,
                                _ver: 1
                            },
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1001113,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1001120,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'breakaway-flg',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '離脱フラグ'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: [
                                            'catalog/model/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/ext/test-org/category/supply/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'information-site',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '情報サイト'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-alliance',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 48,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '参加している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'workflow',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 46,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'ワークフロー定義の配列'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1009999) {
                    // main-blockなし
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/app',
                            name: 'テストアプリ',
                            _code: {
                                _value: 1001117,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            _code: {
                                _value: 1001117,
                                _ver: 1
                            },
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1001120,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'breakaway-flg',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '離脱フラグ'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: [
                                            'catalog/model/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/ext/test-org/category/supply/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'information-site',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '情報サイト'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-alliance',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 48,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '参加している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'workflow',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 46,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'ワークフロー定義の配列'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1002117) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/wf',
                            name: 'PJ①－3)虚弱高齢者見守り研究',
                            _code: {
                                _value: 1002117,
                                _ver: 1
                            },
                            inherit: {
                                _value: 47,
                                _ver: 1
                            },
                            description: '平均寿命と健康寿命の差を短縮し、認知症を予防できるようなスマートエイジング社会を実現することを目指した研究であり、特に都市部の独居の身体的虚弱高齢者や軽度認知障害高齢者の身体的不活発や認知的不活発、睡眠障害に対する予防的介入や、屋内での熱疲労などの予防的な健康管理の仕組みを構築します。'
                        },
                        template: {
                            _code: {
                                _value: 1000117,
                                _ver: 1
                            },
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000400,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000116,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'PJ①－3)虚弱高齢者見守り研究の組織ステートメントです。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            workflow: [
                                {
                                    _value: 1000120,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'breakaway-flg',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '離脱フラグ'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: [
                                            'catalog/model/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/ext/test-org/category/supply/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'information-site',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '情報サイト'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 29,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-alliance',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 48,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: '参加している領域運営サービスプロバイダーコード配列'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'workflow',
                                type: {
                                    of: 'code[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: 46,
                                            _ver: 1
                                        }
                                    }
                                },
                                description: 'ワークフロー定義の配列'
                            }
                        ],
                        attribute: null
                    });
                }
                return;
            }
            res.status(status).end();
        };
        const _listener2 = (req: express.Request, res: express.Response) => {
            const jsonList = [];
            const body = req.body;
            if (body && body.length > 0) {
                for (const codeObj of body) {
                    if (Number(codeObj['_code']['_value']) === 1000200) {
                        jsonList.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_1000001/share',
                                name: '共有定義テスト',
                                description: '共有定義テスト',
                                _code: {
                                    _value: 1000200,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 45,
                                    _ver: null
                                }
                            },
                            template: {
                                share: [
                                    {
                                        id: 'uuuuuuuu-uuuu-uuuu-uuuu-uuuuuuuuuuuu',
                                        role: [
                                            {
                                                _value: 1000005,
                                                _ver: 1
                                            }
                                        ],
                                        document: [
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                }
                                            }
                                        ],
                                        event: [
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                }
                                            }
                                        ],
                                        thing: [
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        });
                    } else if (Number(codeObj['_code']['_value']) === 1000201) {
                        jsonList.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_1000001/share',
                                name: null,
                                description: '共有定義テスト',
                                _code: {
                                    _value: 1000200,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 45,
                                    _ver: null
                                }
                            },
                            template: {
                                share: [
                                    {
                                        id: 'uuuuuuuu-uuuu-uuuu-uuuu-uuuuuuuuuuuu',
                                        role: [
                                            {
                                                _value: 1000005,
                                                _ver: 1
                                            }
                                        ],
                                        document: null,
                                        event: null,
                                        thing: null
                                    }
                                ]
                            }
                        });
                    }
                }
            }
            if (status === ResponseCode.OK) {
                res.status(status).json(jsonList).end();
            } else {
                res.status(status).end();
            }
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.use(bodyParser.json());
        this._app.get('/catalog/:code', _listener);
        this._app.post('/catalog', _listener2);
        this._server = this._app.listen(3001);
    }
}
export class StubCatalogForAccessLogGetCatalogInfosError {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            res.status(ResponseCode.OK).json({
                catalogItem: {
                    ns: 'catalog/ext/test-org/actor/wf',
                    name: 'PJ①－3)虚弱高齢者見守り研究',
                    _code: {
                        _value: 1002117,
                        _ver: 1
                    },
                    inherit: {
                        _value: 47,
                        _ver: 1
                    },
                    description: '平均寿命と健康寿命の差を短縮し、認知症を予防できるようなスマートエイジング社会を実現することを目指した研究であり、特に都市部の独居の身体的虚弱高齢者や軽度認知障害高齢者の身体的不活発や認知的不活発、睡眠障害に対する予防的介入や、屋内での熱疲労などの予防的な健康管理の仕組みを構築します。'
                },
                template: {
                    _code: {
                        _value: 1000117,
                        _ver: 1
                    },
                    'breakaway-flg': false,
                    category: null,
                    'information-site': '',
                    'main-block': {
                        _value: 1000400,
                        _ver: 1
                    },
                    'other-block': null,
                    'region-alliance': [
                        {
                            _value: 1000116,
                            _ver: 1
                        }
                    ],
                    statement: [
                        {
                            title: '組織ステートメント',
                            section: [
                                {
                                    title: 'ご挨拶',
                                    content: [
                                        {
                                            sentence: 'PJ①－3)虚弱高齢者見守り研究の組織ステートメントです。'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    status: [
                        {
                            status: 'certified',
                            by: {
                                _value: 1000001,
                                _ver: 1
                            },
                            at: '2020-01-01T00:00:00.000+0900'
                        }
                    ],
                    workflow: [
                        {
                            _value: 1000120,
                            _ver: 1
                        }
                    ]
                },
                prop: [
                    {
                        key: 'breakaway-flg',
                        type: {
                            of: 'boolean',
                            cmatrix: null
                        },
                        description: '離脱フラグ'
                    },
                    {
                        key: 'category',
                        type: {
                            of: 'code[]',
                            cmatrix: null,
                            candidate: {
                                ns: [
                                    'catalog/model/category/share/actor',
                                    'catalog/built_in/category/share/actor',
                                    'catalog/ext/test-org/category/share/actor',
                                    'catalog/model/category/supply/actor',
                                    'catalog/built_in/category/supply/actor',
                                    'catalog/ext/test-org/category/supply/actor'
                                ],
                                _code: null,
                                base: null
                            }
                        },
                        description: null
                    },
                    {
                        key: 'information-site',
                        type: {
                            of: 'string',
                            cmatrix: null,
                            format: null,
                            unit: null,
                            candidate: null
                        },
                        description: '情報サイト'
                    },
                    {
                        key: 'main-block',
                        type: {
                            of: 'code',
                            cmatrix: null,
                            candidate: {
                                ns: null,
                                _code: null,
                                base: {
                                    _value: 29,
                                    _ver: 1
                                }
                            }
                        },
                        description: 'アクター参加時に割り当てられたPXR-Block'
                    },
                    {
                        key: 'other-block',
                        type: {
                            of: 'code[]',
                            cmatrix: null,
                            candidate: {
                                ns: null,
                                _code: null,
                                base: {
                                    _value: 29,
                                    _ver: 1
                                }
                            }
                        },
                        description: '他アクターから引き継いだPXR-Blockの配列'
                    },
                    {
                        key: 'region-alliance',
                        type: {
                            of: 'code[]',
                            cmatrix: null,
                            candidate: {
                                ns: null,
                                _code: null,
                                base: {
                                    _value: 48,
                                    _ver: 1
                                }
                            }
                        },
                        description: '参加している領域運営サービスプロバイダーコード配列'
                    },
                    {
                        key: 'statement',
                        type: {
                            of: 'item[]',
                            cmatrix: null,
                            candidate: {
                                ns: null,
                                _code: [
                                    {
                                        _value: 61,
                                        _ver: 1
                                    }
                                ],
                                base: null
                            }
                        },
                        description: '組織ステートメント'
                    },
                    {
                        key: 'status',
                        type: {
                            of: 'inner[]',
                            inner: 'CertStatus',
                            cmatrix: null,
                            candidate: null
                        },
                        description: '認定の履歴'
                    },
                    {
                        key: 'workflow',
                        type: {
                            of: 'code[]',
                            cmatrix: null,
                            candidate: {
                                ns: null,
                                _code: null,
                                base: {
                                    _value: 46,
                                    _ver: 1
                                }
                            }
                        },
                        description: 'ワークフロー定義の配列'
                    }
                ],
                attribute: null
            });
            if (!status) {
                this._server.close();
            }
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            res.status(status).end();
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.use(bodyParser.json());
        this._app.get('/catalog/:code', _listener);
        this._app.post('/catalog', _listener2);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerGetIndBook {
    _app: express.Express;
    _server: Server;
    constructor (port: number, code: number, status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
                return;
            }
            res.status(status).end();
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (code === 1001008) {
                    res.status(ResponseCode.OK).json([{
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000432',
                            name: '高齢者向け健康サポート利用規約',
                            _code: {
                                _value: 1001008,
                                _ver: 1
                            },
                            inherit: {
                                _value: 204,
                                _ver: 1
                            },
                            description: '高齢者向け健康サポートの利用規約です。'
                        },
                        template: {
                            _code: {
                                _value: 1001008,
                                _ver: 1
                            },
                            'deleting-data-flag': false,
                            'period-of-re-consent': null,
                            're-consent-flag': false,
                            'returning-data-flag': false,
                            'terms-of-use': [
                                {
                                    title: 'リージョン利用規約',
                                    section: [
                                        {
                                            title: '第1項',
                                            content: [
                                                {
                                                    sentence: '規約～～～。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'deleting-data-flag',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'Region離脱時データ削除フラグ',
                                isInherit: true
                            },
                            {
                                key: 'period-of-re-consent',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: {
                                        _value: 6,
                                        _ver: 1
                                    },
                                    unit: null,
                                    candidate: null
                                },
                                description: '再同意期限',
                                isInherit: true
                            },
                            {
                                key: 're-consent-flag',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '再同意フラグ',
                                isInherit: true
                            },
                            {
                                key: 'returning-data-flag',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'Region離脱時データ返却フラグ',
                                isInherit: true
                            },
                            {
                                key: 'terms-of-use',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'Region利用規約',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    }]);
                }
                return;
            }
            res.status(status).end();
        };

        const _listener3 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const actorCode = Number(req.params.actorCode);
                if (actorCode === 1000432) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root',
                                name: 'aaa',
                                _code: {
                                    _value: 1000432,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 49,
                                    _ver: 1
                                },
                                description: 'aaaの定義です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000432,
                                    _ver: 1
                                },
                                'breakaway-flg': false,
                                category: null,
                                'information-site': null,
                                'main-block': {
                                    _value: 1000402,
                                    _ver: 1
                                },
                                'other-block': null,
                                statement: [
                                    {
                                        title: '組織ステートメント',
                                        section: [
                                            {
                                                title: '組織ステートメント',
                                                content: [
                                                    {
                                                        sentence: 'aaa地区の住民が、近隣の病院をはじめとする様々な医療・健康サービスで質の高いサービスをスムーズに受けられるように、複数の医療・ヘルスケアサービスを認定アプリケーションで連携させるサービスを企画・運営します。'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                status: [
                                    {
                                        status: 'certified',
                                        by: {
                                            _value: 1000431,
                                            _ver: 1
                                        },
                                        at: '2020-01-01T00:00:00.000+0900'
                                    }
                                ],
                                region: [
                                    {
                                        _value: 1000451,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000452,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000453,
                                        _ver: 1
                                    }
                                ],
                                'trader-alliance': [
                                    {
                                        _value: 1000435,
                                        _ver: 1
                                    }
                                ]
                            },
                            prop: [
                                {
                                    key: 'breakaway-flg',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '離脱フラグ',
                                    isInherit: true
                                },
                                {
                                    key: 'category',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: [
                                                'catalog/model/category/share/actor',
                                                'catalog/built_in/category/share/actor',
                                                'catalog/ext/aaa-healthcare-consortium/category/share/actor',
                                                'catalog/model/category/supply/actor',
                                                'catalog/built_in/category/supply/actor',
                                                'catalog/ext/aaa-healthcare-consortium/category/supply/actor'
                                            ],
                                            _code: null,
                                            base: null
                                        }
                                    },
                                    description: null,
                                    isInherit: true
                                },
                                {
                                    key: 'information-site',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '情報サイト',
                                    isInherit: true
                                },
                                {
                                    key: 'main-block',
                                    type: {
                                        of: 'code',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 29,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: 'アクター参加時に割り当てられたPXR-Block',
                                    isInherit: true
                                },
                                {
                                    key: 'other-block',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 29,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: '他アクターから引き継いだPXR-Blockの配列',
                                    isInherit: true
                                },
                                {
                                    key: 'statement',
                                    type: {
                                        of: 'item[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: '組織ステートメント',
                                    isInherit: true
                                },
                                {
                                    key: 'status',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'CertStatus',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: '認定の履歴',
                                    isInherit: true
                                },
                                {
                                    key: 'region',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 48,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: 'Region定義',
                                    isInherit: true
                                },
                                {
                                    key: 'trader-alliance',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 38,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: '提携するデータ取引サービスプロバイダーのコード配列',
                                    isInherit: true
                                }
                            ],
                            attribute: null
                        }
                    );
                }
                return;
            }
            res.status(status).end();
        };

        const _listener4 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const ns = req.query['ns'];
                if (ns === 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region') {
                    res.json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                                    name: '高齢者向け健康サポート',
                                    _code: {
                                        _value: 1000451,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 48,
                                        _ver: 1
                                    },
                                    description: '高齢者向け健康サポートのリージョンの定義です。'
                                },
                                template: {
                                    _code: {
                                        _value: 1000451,
                                        _ver: 1
                                    },
                                    'app-alliance': [
                                        {
                                            _value: 1000436,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000437,
                                            _ver: 1
                                        }
                                    ],
                                    'information-site': null,
                                    required_app: null,
                                    required_wf: null,
                                    statement: [
                                        {
                                            title: 'リージョンステートメント',
                                            section: [
                                                {
                                                    title: 'ステートメント',
                                                    content: [
                                                        {
                                                            sentence: '高齢者が医療・健康サービスを簡単に受けられるようにサポートするアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    'terms-of-use': {
                                        _value: 1001008,
                                        _ver: 1
                                    },
                                    'wf-alliance': [
                                        {
                                            _value: 1000438,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000440,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000441,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000442,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000443,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000444,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: [
                                    {
                                        key: 'app-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(アプリケーション)のコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'information-site',
                                        type: {
                                            of: 'string',
                                            cmatrix: null,
                                            format: null,
                                            unit: null,
                                            candidate: null
                                        },
                                        description: 'Regionの情報サイト',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_app',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須アプリケーションのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_wf',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須ワークフローのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'statement',
                                        type: {
                                            of: 'item[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: [
                                                    {
                                                        _value: 61,
                                                        _ver: 1
                                                    }
                                                ],
                                                base: null
                                            }
                                        },
                                        description: 'Regionステートメント',
                                        isInherit: true
                                    },
                                    {
                                        key: 'terms-of-use',
                                        type: {
                                            of: 'code',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: null
                                            }
                                        },
                                        description: 'Region利用規約のカタログコード',
                                        isInherit: true
                                    },
                                    {
                                        key: 'wf-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(ワークフロー)のコード配列',
                                        isInherit: true
                                    }
                                ],
                                attribute: null
                            },
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                                    name: '子育てサポート',
                                    _code: {
                                        _value: 1000452,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 48,
                                        _ver: 1
                                    },
                                    description: '子育てサポートのリージョンの定義です。'
                                },
                                template: {
                                    _code: {
                                        _value: 1000452,
                                        _ver: 1
                                    },
                                    'app-alliance': [
                                        {
                                            _value: 1000436,
                                            _ver: 1
                                        }
                                    ],
                                    'information-site': null,
                                    required_app: null,
                                    required_wf: null,
                                    statement: [
                                        {
                                            title: 'リージョンステートメント',
                                            section: [
                                                {
                                                    title: '子育てサポート',
                                                    content: [
                                                        {
                                                            sentence: '子育て世帯に便利なアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    'terms-of-use': null,
                                    'wf-alliance': [
                                        {
                                            _value: 1000438,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000439,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000441,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000442,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000444,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: [
                                    {
                                        key: 'app-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(アプリケーション)のコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'information-site',
                                        type: {
                                            of: 'string',
                                            cmatrix: null,
                                            format: null,
                                            unit: null,
                                            candidate: null
                                        },
                                        description: 'Regionの情報サイト',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_app',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須アプリケーションのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_wf',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須ワークフローのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'statement',
                                        type: {
                                            of: 'item[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: [
                                                    {
                                                        _value: 61,
                                                        _ver: 1
                                                    }
                                                ],
                                                base: null
                                            }
                                        },
                                        description: 'Regionステートメント',
                                        isInherit: true
                                    },
                                    {
                                        key: 'terms-of-use',
                                        type: {
                                            of: 'code',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: null
                                            }
                                        },
                                        description: 'Region利用規約のカタログコード',
                                        isInherit: true
                                    },
                                    {
                                        key: 'wf-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(ワークフロー)のコード配列',
                                        isInherit: true
                                    }
                                ],
                                attribute: null
                            },
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                                    name: '働く世代向け基礎体力向上サポート',
                                    _code: {
                                        _value: 1000453,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 48,
                                        _ver: 1
                                    },
                                    description: '働く世代向け基礎体力向上サポートのリージョンの定義です。'
                                },
                                template: {
                                    _code: {
                                        _value: 1000453,
                                        _ver: 1
                                    },
                                    'app-alliance': [
                                        {
                                            _value: 1000437,
                                            _ver: 1
                                        }
                                    ],
                                    'information-site': null,
                                    required_app: null,
                                    required_wf: null,
                                    statement: [
                                        {
                                            title: 'リージョンステートメント',
                                            section: [
                                                {
                                                    title: '働く世代向け基礎体力向上サポート',
                                                    content: [
                                                        {
                                                            sentence: '仕事の合間でもできる基礎体力向上サポートアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    'terms-of-use': null,
                                    'wf-alliance': [
                                        {
                                            _value: 1000438,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000440,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000441,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000442,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000444,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: [
                                    {
                                        key: 'app-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(アプリケーション)のコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'information-site',
                                        type: {
                                            of: 'string',
                                            cmatrix: null,
                                            format: null,
                                            unit: null,
                                            candidate: null
                                        },
                                        description: 'Regionの情報サイト',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_app',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須アプリケーションのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_wf',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須ワークフローのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'statement',
                                        type: {
                                            of: 'item[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: [
                                                    {
                                                        _value: 61,
                                                        _ver: 1
                                                    }
                                                ],
                                                base: null
                                            }
                                        },
                                        description: 'Regionステートメント',
                                        isInherit: true
                                    },
                                    {
                                        key: 'terms-of-use',
                                        type: {
                                            of: 'code',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: null
                                            }
                                        },
                                        description: 'Region利用規約のカタログコード',
                                        isInherit: true
                                    },
                                    {
                                        key: 'wf-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(ワークフロー)のコード配列',
                                        isInherit: true
                                    }
                                ],
                                attribute: null
                            }
                        ]
                    );
                }
                return;
            }
            res.status(status).end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.get('/catalog/name', _listener);
        this._app.post('/catalog', _listener2);
        this._app.get('/catalog/:actorCode', _listener3);
        this._app.get('/catalog', _listener4);
        this._server = this._app.listen(port);
    }
}

export class StubCatalogServerNotify {
    _app: express.Express;
    _server: Server;
    constructor (status: number, nsNum: number, catalogNum: number) {
        this._app = express();

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                res.status(200);
                // アクター確認
                if (code === 1002700) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            ext_name: 'test-org',
                            name: 'test-org',
                            _code: {
                                _value: 1000006,
                                _ver: 1
                            }
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002701) {
                    // 異常：アクターカタログのns不正
                    res.json({
                        catalogItem: {
                            ns: 'actor',
                            _code: {
                                _value: 1000006,
                                _ver: 1
                            }
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002702) {
                    // 異常：アクターカタログのcatalogItemが存在しない
                    res.json({
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002703) {
                    // 異常：アクターカタログのcatalogItem.nsがnull
                    res.json({
                        catalogItem: {
                            ns: null,
                            _code: {
                                _value: 1000006,
                                _ver: 1
                            }
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002704) {
                    // 異常：アクターカタログのcatalogItem._codeが存在しない
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root'
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002705) {
                    // 異常：アクターカタログのcatalogItem._code._valueが存在しない
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            _code: {
                                _ver: 1
                            }
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002706) {
                    // 異常：アクターカタログのcatalogItem._code._valueが数値以外
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            _code: {
                                _value: 'dummy',
                                _ver: 1
                            }
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002707) {
                    // 異常：アクターカタログのcatalogItem._code._verが存在しない
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            _code: {
                                _value: 1000006
                            }
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002708) {
                    // 異常：アクターカタログのcatalogItem._code._verが数値以外
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            _code: {
                                _value: 1000006,
                                _ver: 'dummy'
                            }
                        },
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1002709) {
                    // 異常：コードで取得したアクターカタログの返却値が配列
                    res.json({
                        catalogItem: [
                            {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            {
                                ns: '/actor',
                                _code: {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            }
                        ],
                        template: {
                            'main-block': {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    });
                }
            } else {
                res.status(status);
            }

            res.end();
        };

        const _extName = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (nsNum === 0) {
                    res.json({
                        ext_name: 'test-org'
                    });
                } else {
                    res.json({
                        ext_name: 'dummy'
                    });
                }
            }
            res.status(status).end();
        };

        const _pxrRootCatalog = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.status(200);
                const ns = req.query['ns'];
                if (ns === 'catalog/ext/test-org/actor/pxr-root') {
                    if (catalogNum === 0) {
                        // 正常
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 1) {
                        // 異常：catalogItemが存在しない
                        res.json([{
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 2) {
                        // 異常：catalogItem.nsがnull
                        res.json([{
                            catalogItem: {
                                ns: null,
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 3) {
                        // 異常：catalogItem._codeが存在しない
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org'
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 4) {
                        // 異常：catalogItem._code._valueが存在しない
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 5) {
                        // 異常：catalogItem._code._valueが数値以外
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 'dummy',
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 6) {
                        // 異常：catalogItem._code._verが存在しない
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 7) {
                        // 異常：catalogItem._code._verが数値以外
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 'dummy'
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 8) {
                        // 異常：pxr-rootカタログ取得、1件より多い
                        res.json([
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/test-org/actor/pxr-root',
                                    name: 'test-org',
                                    _code: {
                                        _value: 1000006,
                                        _ver: 1
                                    }
                                },
                                template: {
                                    workflow: [{
                                        _value: 1000004,
                                        _ver: 1
                                    }],
                                    application: [],
                                    'main-block': {
                                        _value: 1000006,
                                        _ver: 1
                                    }
                                }
                            },
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/test-org/actor/pxr-root',
                                    name: 'test-org',
                                    _code: {
                                        _value: 1000006,
                                        _ver: 2
                                    }
                                },
                                template: {
                                    workflow: [{
                                        _value: 1000004,
                                        _ver: 1
                                    }],
                                    application: [],
                                    'main-block': {
                                        _value: 1000006,
                                        _ver: 1
                                    }
                                }
                            }
                        ]);
                    } else if (catalogNum === 9) {
                        // 異常：pxr-rootカタログ取得、0件
                        res.json([]);
                    } else if (catalogNum === 10) {
                        // 異常：UPDATEエラー
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 'dummy',
                                    _ver: 1
                                }
                            }
                        }]);
                    }
                } else {
                    res.json({ ns: ns });
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/name', _extName);
        this._app.get('/catalog/:code/:version', _listener);
        this._app.get('/catalog/:code', _listener);
        this._app.get('/catalog', _pxrRootCatalog);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerSearchDocument {
    _app: express.Express;
    _server: Server;
    constructor (port: number, status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
                return;
            }
            res.status(status).end();
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (code === 1000020) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000020,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000116,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000026) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000020,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000120,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000004) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/wf',
                            name: 'テスト用ワークフロー',
                            _code: {
                                _value: 1000004,
                                _ver: 1
                            },
                            inherit: {
                                _value: 47,
                                _ver: 1
                            },
                            description: 'テスト用ワークフローです'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000117,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000003,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'テスト用ワークフローの組織ステートメントです。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            workflow: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000021) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000021,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000116,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000022) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000022,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000116,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000023) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000020,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': null,
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000024) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000024,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000118,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000025) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000025,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000119,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                }
                return;
            }
            res.status(status).end();
        };

        const _listener3 = (req: express.Request, res: express.Response) => {
            const ns = req.query ? req.query.ns : null;
            if (status === ResponseCode.OK) {
                if (ns === 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000020/create-html-function') {
                    res.status(ResponseCode.OK).json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000020/create-html-function',
                                    name: 'create-html-function',
                                    description: 'テスト用HTML作成関数のURLマッピングです。',
                                    _code: {
                                        _value: 1001213,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 213,
                                        _ver: null
                                    }
                                },
                                template: {
                                    'create-html-function': [
                                        {
                                            document: {
                                                _value: 1000008,
                                                _ver: 1
                                            },
                                            id: 'a5baf9b6-1c7d-836b-019c-cf16a69656f0'
                                        }
                                    ],
                                    prop: null,
                                    attribute: null
                                }
                            }
                        ]
                    );
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/setting/actor/pxr-root/actor_1000001') {
                    res.status(ResponseCode.OK).json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/setting/actor/pxr-root/actor_1000001',
                                    name: 'setting',
                                    description: '流通制御による流通制御サービスプロバイダーのアクター個別設定の定義です。',
                                    _code: {
                                        _value: 1001130,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 130,
                                        _ver: null
                                    }
                                },
                                template: {
                                    'create-html-function': [
                                        {
                                            id: 'a5baf9b6-1c7d-836b-019c-cf16a69656f0',
                                            url: 'http://localhost:6001/create-html-function/a5baf9b6-1c7d-836b-019c-cf16a69656f0'
                                        },
                                        {
                                            id: 'c1401806-26c3-a2d0-5d0e-f2e6aa7796c3',
                                            url: 'http://localhost:6001/create-html-function/c1401806-26c3-a2d0-5d0e-f2e6aa7796c3'
                                        }
                                    ],
                                    prop: null,
                                    inner: null,
                                    attribute: null
                                }
                            }
                        ]
                    );
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000004/create-html-function') {
                    res.status(ResponseCode.OK).json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000004/create-html-function',
                                    name: 'create-html-function',
                                    description: 'テスト用HTML作成関数のURLマッピングです。',
                                    _code: {
                                        _value: 1001214,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 213,
                                        _ver: null
                                    }
                                },
                                template: {
                                    'create-html-function': [
                                        {
                                            document: {
                                                _value: 1000009,
                                                _ver: 1
                                            },
                                            id: 'c1401806-26c3-a2d0-5d0e-f2e6aa7796c3'
                                        }
                                    ],
                                    prop: null,
                                    attribute: null
                                }
                            }
                        ]
                    );
                } else if (ns === 'catalog/built_in/url-mapping/create-html-function') {
                    res.status(ResponseCode.OK).json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/built_in/url-mapping/create-html-function',
                                    name: 'create-html-function',
                                    description: 'テスト用HTML作成関数のURLマッピングです。',
                                    _code: {
                                        _value: 30047,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 213,
                                        _ver: null
                                    }
                                },
                                template: {
                                    'create-html-function': [
                                        {
                                            document: {
                                                _value: 1000008,
                                                _ver: 1
                                            },
                                            id: 'a5baf9b6-1c7d-836b-019c-cf16a69656f0'
                                        }
                                    ],
                                    prop: null,
                                    attribute: null
                                }
                            }
                        ]
                    );
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000021/create-html-function') {
                    res.status(400).end();
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000022/create-html-function') {
                    res.status(ResponseCode.OK).json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000020/create-html-function',
                                    name: 'create-html-function',
                                    description: 'テスト用HTML作成関数のURLマッピングです。',
                                    _code: {
                                        _value: 1001213,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 213,
                                        _ver: null
                                    }
                                },
                                template: {
                                    'create-html-function': [
                                        {
                                            document: {
                                                _value: 1000018,
                                                _ver: 1
                                            },
                                            id: 'a5baf9b6-1c7d-836b-019c-cf16a69656f0'
                                        }
                                    ],
                                    prop: null,
                                    attribute: null
                                }
                            }
                        ]
                    );
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000025/create-html-function') {
                    res.status(ResponseCode.OK).json([{}]);
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000026/create-html-function') {
                    res.status(ResponseCode.OK).json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/url-mapping/actor_1000026/create-html-function',
                                    name: 'create-html-function',
                                    description: 'テスト用HTML作成関数のURLマッピングです。',
                                    _code: {
                                        _value: 1001213,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 213,
                                        _ver: null
                                    }
                                },
                                template: {
                                    'create-html-function': [
                                        {
                                            document: {
                                                _value: 1000018,
                                                _ver: 1
                                            },
                                            id: 'a5baf9b6-1c7d-836b-019c-cf16a69656f0'
                                        }
                                    ],
                                    prop: null,
                                    attribute: null
                                }
                            }
                        ]
                    );
                }
                return;
            }
            res.status(status).end();
        };

        const _listener4 = (req: express.Request, res: express.Response) => {
            const body = req.body;
            if (status === ResponseCode.OK) {
                const catalogs = [];
                for (const ele of body) {
                    const code = Number(ele['_code']['_value']);
                    if (code === 1000008) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/document',
                                name: 'テストドキュメント',
                                description: 'テスト用ドキュメントです。',
                                _code: {
                                    _value: 1000008,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 52,
                                    _ver: null
                                }
                            },
                            template: {
                                sourceId: '202108-1',
                                id: {
                                    index: '2_1_1',
                                    value: 'fedc51ce-2efd-4ade-9bbe-45dc445ae9c6'
                                },
                                code: {
                                    index: '2_1_2',
                                    value: {
                                        _value: 1000008,
                                        _ver: 1
                                    }
                                },
                                createdAt: {
                                    index: '2_2_1',
                                    value: '2020-02-20T00:00:00.000+0900'
                                },
                                app: {
                                    code: {
                                        index: '2_3_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    app: {
                                        index: '2_3_5',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    }
                                },
                                wf: null,
                                chapter: [
                                    {
                                        title: 'イベント識別子',
                                        event: [
                                            '4f75161a-449a-4839-be6a-4cc577b8a8d0'
                                        ],
                                        sourceId: [
                                            '202108-1'
                                        ]
                                    }
                                ]
                            }
                        });
                    } else if (code === 1000009) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/document',
                                name: 'テストドキュメント',
                                description: 'テスト用ドキュメントです。',
                                _code: {
                                    _value: 1000009,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 52,
                                    _ver: null
                                }
                            },
                            template: {
                                id: {
                                    index: '2_1_1',
                                    value: 'c2107e2d-bfda-f8bb-55af-885ef0a793a1'
                                },
                                code: {
                                    index: '2_1_2',
                                    value: {
                                        _value: 1000009,
                                        _ver: 1
                                    }
                                },
                                createdAt: {
                                    index: '2_2_1',
                                    value: '2020-02-20T00:00:00.000+0900'
                                },
                                sourceId: '202108-1',
                                wf: {
                                    code: {
                                        index: '2_3_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    wf: {
                                        index: '2_3_2',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    },
                                    role: {
                                        index: '2_3_3',
                                        value: {
                                            _value: 1000005,
                                            _ver: 1
                                        }
                                    },
                                    staffId: {
                                        index: '2_3_4',
                                        value: 'wf01'
                                    }
                                },
                                app: null,
                                chapter: [
                                    {
                                        title: 'イベント識別子',
                                        event: [
                                            'd09dd62e-15c4-07f9-9b47-6a0ebda9f039'
                                        ],
                                        sourceId: [
                                            '202107-1-1'
                                        ]
                                    }
                                ]
                            }
                        });
                    } else if (code === 1000200) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/event',
                                name: 'テストイベント',
                                description: 'テストイベントです。',
                                _code: {
                                    _value: 1000200,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 53,
                                    _ver: null
                                }
                            },
                            template: {
                                id: {
                                    index: '3_1_1',
                                    value: '4f75161a-449a-4839-be6a-4cc577b8a8d0'
                                },
                                code: {
                                    index: '3_1_2',
                                    value: {
                                        _value: 1000200,
                                        _ver: 1
                                    }
                                },
                                start: {
                                    index: '3_2_1',
                                    value: '2020-02-20T00:00:00.000+0900'
                                },
                                end: {
                                    index: '3_2_2',
                                    value: '2020-02-21T00:00:00.000+0900'
                                },
                                location: {
                                    index: '3_3_1',
                                    value: null
                                },
                                sourceId: '20200221-1',
                                env: null,
                                app: {
                                    code: {
                                        index: '3_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    app: {
                                        index: '3_5_5',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    }
                                },
                                wf: null,
                                thing: [
                                    {
                                        acquired_time: {
                                            index: '4_2_2_4',
                                            value: null
                                        },
                                        code: {
                                            index: '4_1_2',
                                            value: {
                                                _value: 1000300,
                                                _ver: 1
                                            }
                                        },
                                        env: null,
                                        sourceId: null,
                                        id: {
                                            index: '4_1_1',
                                            value: null
                                        },
                                        'x-axis': {
                                            index: '4_2_2_1',
                                            value: null
                                        },
                                        'y-axis': {
                                            index: '4_2_2_2',
                                            value: null
                                        },
                                        'z-axis': {
                                            index: '4_2_2_3',
                                            value: null
                                        }
                                    }
                                ]
                            }
                        });
                    } else if (code === 1000201) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/event',
                                name: 'テストイベント',
                                description: 'テストイベントです。',
                                _code: {
                                    _value: 1000201,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 53,
                                    _ver: null
                                }
                            },
                            template: {
                                id: {
                                    index: '3_1_1',
                                    value: 'ad7699e7-9955-2c06-5d8a-cf2d581398af'
                                },
                                code: {
                                    index: '3_1_2',
                                    value: {
                                        _value: 1000201,
                                        _ver: 1
                                    }
                                },
                                start: {
                                    index: '3_2_1',
                                    value: '2020-02-20T00:00:00.000+0900'
                                },
                                end: {
                                    index: '3_2_2',
                                    value: '2020-02-21T00:00:00.000+0900'
                                },
                                location: {
                                    index: '3_3_1',
                                    value: null
                                },
                                sourceId: '202108-1',
                                env: null,
                                app: {
                                    code: {
                                        index: '3_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    app: {
                                        index: '3_5_5',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    }
                                },
                                wf: null,
                                thing: [
                                    {
                                        acquired_time: {
                                            index: '4_2_2_4',
                                            value: null
                                        },
                                        code: {
                                            index: '4_1_2',
                                            value: {
                                                _value: 1000301,
                                                _ver: 1
                                            }
                                        },
                                        env: null,
                                        sourceId: null,
                                        id: {
                                            index: '4_1_1',
                                            value: null
                                        },
                                        'x-axis': {
                                            index: '4_2_2_1',
                                            value: null
                                        },
                                        'y-axis': {
                                            index: '4_2_2_2',
                                            value: null
                                        },
                                        'z-axis': {
                                            index: '4_2_2_3',
                                            value: null
                                        }
                                    }
                                ]
                            }
                        });
                    } else if (code === 1000202) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/event',
                                name: 'テストイベント',
                                description: 'テストイベントです。',
                                _code: {
                                    _value: 1000202,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 53,
                                    _ver: null
                                }
                            },
                            template: {
                                id: {
                                    index: '3_1_1',
                                    value: 'd09dd62e-15c4-07f9-9b47-6a0ebda9f039'
                                },
                                code: {
                                    index: '3_1_2',
                                    value: {
                                        _value: 1000202,
                                        _ver: 1
                                    }
                                },
                                start: {
                                    index: '3_2_1',
                                    value: '2020-02-20T00:00:00.000+0900'
                                },
                                end: {
                                    index: '3_2_2',
                                    value: '2020-02-21T00:00:00.000+0900'
                                },
                                location: {
                                    index: '3_3_1',
                                    value: null
                                },
                                sourceId: '20200221-1',
                                env: null,
                                wf: {
                                    code: {
                                        index: '3_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    wf: {
                                        index: '3_5_2',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    },
                                    role: {
                                        index: '3_5_3',
                                        value: {
                                            _value: 1000005,
                                            _ver: 1
                                        }
                                    },
                                    staffId: {
                                        index: '3_5_4',
                                        value: 'wf01'
                                    }
                                },
                                app: null,
                                thing: [
                                    {
                                        acquired_time: {
                                            index: '4_2_2_4',
                                            value: null
                                        },
                                        code: {
                                            index: '4_1_2',
                                            value: {
                                                _value: 1000302,
                                                _ver: 1
                                            }
                                        },
                                        env: null,
                                        sourceId: null,
                                        id: {
                                            index: '4_1_1',
                                            value: null
                                        },
                                        'x-axis': {
                                            index: '4_2_2_1',
                                            value: null
                                        },
                                        'y-axis': {
                                            index: '4_2_2_2',
                                            value: null
                                        },
                                        'z-axis': {
                                            index: '4_2_2_3',
                                            value: null
                                        }
                                    }
                                ]
                            }
                        });
                    } else if (code === 1000203) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/event',
                                name: 'テストイベント',
                                description: 'テストイベントです。',
                                _code: {
                                    _value: 1000203,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 53,
                                    _ver: null
                                }
                            },
                            template: {
                                id: {
                                    index: '3_1_1',
                                    value: 'd09dd62e-15c4-07f9-9b47-6a0ebda9f039'
                                },
                                code: {
                                    index: '3_1_2',
                                    value: {
                                        _value: 1000203,
                                        _ver: 1
                                    }
                                },
                                start: {
                                    index: '3_2_1',
                                    value: '2020-02-20T00:00:00.000+0900'
                                },
                                end: {
                                    index: '3_2_2',
                                    value: '2020-02-21T00:00:00.000+0900'
                                },
                                location: {
                                    index: '3_3_1',
                                    value: null
                                },
                                sourceId: '202107-1',
                                env: null,
                                wf: {
                                    code: {
                                        index: '3_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    wf: {
                                        index: '3_5_2',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    },
                                    role: {
                                        index: '3_5_3',
                                        value: {
                                            _value: 1000005,
                                            _ver: 1
                                        }
                                    },
                                    staffId: {
                                        index: '3_5_4',
                                        value: 'wf01'
                                    }
                                },
                                app: null,
                                thing: [
                                    {
                                        acquired_time: {
                                            index: '4_2_2_4',
                                            value: null
                                        },
                                        code: {
                                            index: '4_1_2',
                                            value: {
                                                _value: 1000303,
                                                _ver: 1
                                            }
                                        },
                                        env: null,
                                        sourceId: null,
                                        id: {
                                            index: '4_1_1',
                                            value: null
                                        },
                                        'x-axis': {
                                            index: '4_2_2_1',
                                            value: null
                                        },
                                        'y-axis': {
                                            index: '4_2_2_2',
                                            value: null
                                        },
                                        'z-axis': {
                                            index: '4_2_2_3',
                                            value: null
                                        }
                                    }
                                ]
                            }
                        });
                    } else if (code === 1000300) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/thing',
                                name: 'テストモノ',
                                description: 'テストモノです。',
                                _code: {
                                    _value: 1000300,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 55,
                                    _ver: 1
                                }
                            },
                            template: {
                                code: {
                                    index: '4_1_2',
                                    value: {
                                        _value: 1000300,
                                        _ver: 1
                                    }
                                },
                                env: null,
                                sourceId: null,
                                id: {
                                    index: '4_1_1',
                                    value: null
                                },
                                app: {
                                    code: {
                                        index: '4_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    app: {
                                        index: '4_5_5',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    }
                                },
                                wf: null
                            }
                        });
                    } else if (code === 1000301) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/thing',
                                name: 'テストモノ',
                                description: 'テストモノです。',
                                _code: {
                                    _value: 1000301,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 55,
                                    _ver: 1
                                }
                            },
                            template: {
                                code: {
                                    index: '4_1_2',
                                    value: {
                                        _value: 1000301,
                                        _ver: 1
                                    }
                                },
                                env: null,
                                sourceId: null,
                                id: {
                                    index: '4_1_1',
                                    value: null
                                },
                                app: {
                                    code: {
                                        index: '4_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    app: {
                                        index: '4_5_5',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    }
                                },
                                wf: null
                            }
                        });
                    } else if (code === 1000302) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/thing',
                                name: 'テストモノ',
                                description: 'テストモノです。',
                                _code: {
                                    _value: 1000302,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 55,
                                    _ver: 1
                                }
                            },
                            template: {
                                code: {
                                    index: '4_1_2',
                                    value: {
                                        _value: 1000302,
                                        _ver: 1
                                    }
                                },
                                env: null,
                                sourceId: null,
                                id: {
                                    index: '4_1_1',
                                    value: null
                                },
                                wf: {
                                    code: {
                                        index: '4_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    wf: {
                                        index: '4_5_2',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    },
                                    role: {
                                        index: '4_5_3',
                                        value: {
                                            _value: 1000005,
                                            _ver: 1
                                        }
                                    },
                                    staffId: {
                                        index: '4_5_4',
                                        value: 'wf01'
                                    }
                                },
                                app: null
                            }
                        });
                    } else if (code === 1000303) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/thing',
                                name: 'テストモノ',
                                description: 'テストモノです。',
                                _code: {
                                    _value: 1000303,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 55,
                                    _ver: 1
                                }
                            },
                            template: {
                                code: {
                                    index: '4_1_2',
                                    value: {
                                        _value: 1000303,
                                        _ver: 1
                                    }
                                },
                                env: null,
                                sourceId: null,
                                id: {
                                    index: '4_1_1',
                                    value: null
                                },
                                wf: {
                                    code: {
                                        index: '4_5_1',
                                        value: {
                                            _value: 1000117,
                                            _ver: 1
                                        }
                                    },
                                    wf: {
                                        index: '4_5_2',
                                        value: {
                                            _value: 1000007,
                                            _ver: 1
                                        }
                                    },
                                    role: {
                                        index: '4_5_3',
                                        value: {
                                            _value: 1000005,
                                            _ver: 1
                                        }
                                    },
                                    staffId: {
                                        index: '4_5_4',
                                        value: 'wf01'
                                    }
                                },
                                app: null
                            }
                        });
                    }
                }
                res.status(status).json(catalogs);
            } else {
                res.status(status).end();
            }
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.use(bodyParser.json());
        this._app.get('/catalog/name', _listener);
        this._app.get('/catalog/:code', _listener2);
        this._app.get('/catalog', _listener3);
        this._app.post('/catalog', _listener4);
        this._server = this._app.listen(port);
    }
}

export class StubCatalogServerStoreEventNotificate {
    _app: express.Express;
    _server: Server;
    constructor (port: number, status: number, permission: number, prohibition: number, sharingStatus: number = ResponseCode.OK) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
                return;
            }
            res.status(status).end();
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (code === 1000471) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000437/application',
                                name: 'FiNCアプリ',
                                descriptions: 'FiNCアプリの定義です。',
                                _code: {
                                    _value: 1000471,
                                    _ver: null
                                },
                                inherit: {
                                    _value: 41,
                                    _ver: null
                                }
                            },
                            template: {
                                prop: null,
                                'information-site': null,
                                'region-alliance': [
                                    {
                                        _value: 1000451,
                                        _ver: 1
                                    }
                                ],
                                share: [
                                    {
                                        _value: 1000472,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000473,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000474,
                                        _ver: 1
                                    }
                                ],
                                store: [
                                    {
                                        _value: 1000475,
                                        _ver: 1
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000437) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                                name: 'FiNC Technologies',
                                _code: {
                                    _value: 1000437,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 42,
                                    _ver: 1
                                },
                                description: 'FiNC Technologiesのアプリケーションです。'
                            },
                            template: {
                                _code: {
                                    _value: 1000437,
                                    _ver: 1
                                },
                                application: [
                                    {
                                        _value: 1000471,
                                        _ver: 1
                                    }
                                ],
                                'breakaway-flg': false,
                                category: null,
                                'information-site': null,
                                'main-block': {
                                    _value: 1000408,
                                    _ver: 1
                                },
                                'other-block': null,
                                statement: [
                                    {
                                        title: '組織ステートメント',
                                        section: [
                                            {
                                                title: 'ご挨拶',
                                                content: [
                                                    {
                                                        sentence: 'for a healthier, happier future. お客さま一人ひとりに寄り添い、健康の先にある幸せな生活を実現する。'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                status: [
                                    {
                                        status: 'certified',
                                        by: {
                                            _value: 1000001,
                                            _ver: 1
                                        },
                                        at: '2020-01-01T00:00:00.000+0900'
                                    }
                                ]
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000445) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                                name: 'N区公民館',
                                _code: {
                                    _value: 1000445,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 47,
                                    _ver: 1
                                },
                                description: 'N区公民館の定義です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000445,
                                    _ver: 1
                                },
                                'breakaway-flg': false,
                                category: null,
                                'information-site': null,
                                'main-block': {
                                    _value: 1000417,
                                    _ver: 1
                                },
                                'other-block': null,
                                statement: [
                                    {
                                        title: '組織ステートメント',
                                        section: [
                                            {
                                                title: 'ご挨拶',
                                                content: [
                                                    {
                                                        sentence: 'N区住民の健康増進に役立つイベントを、複数の医療・ヘルスケアサービスと認定アプリケーション提供事業者と連携して企画・運営します。'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                status: [
                                    {
                                        status: 'certified',
                                        by: {
                                            _value: 1000001,
                                            _ver: 1
                                        },
                                        at: '2020-01-01T00:00:00.000+0900'
                                    }
                                ],
                                workflow: [
                                    {
                                        _value: 1000601,
                                        _ver: 1
                                    }
                                ]
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000601) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000445/application',
                                name: '高齢者向け健康増進イベント',
                                _code: {
                                    _value: 1000601,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 46,
                                    _ver: 1
                                },
                                description: '高齢者向け健康増進イベントの定義です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000601,
                                    _ver: 1
                                },
                                'information-site': null,
                                'region-alliance': null,
                                share: [
                                    {
                                        _value: 1000603,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000604,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000605,
                                        _ver: 1
                                    }
                                ],
                                store: [
                                    {
                                        _value: 1000606,
                                        _ver: 1
                                    }
                                ]
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                }
                return;
            }
            res.status(status).end();
        };

        const _listener3 = (req: express.Request, res: express.Response) => {
            if (sharingStatus !== ResponseCode.OK) {
                res.status(sharingStatus).end();
                return;
            } else if ((permission !== 0 || prohibition !== 0) && status === ResponseCode.OK && sharingStatus === ResponseCode.OK) {
                const ns = req.query.ns;
                if (ns === 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000437/sharing-restriction') {
                    if (permission === 1 && prohibition === 1) {
                        // 異常：許可禁止両方設定
                        res.status(ResponseCode.OK).json(
                            [
                                {
                                    catalogItem: {
                                        ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000438/sharing-restriction',
                                        name: '共有制限',
                                        description: 'テスト用共有制限',
                                        _code: {
                                            _value: 1001209,
                                            _var: 1
                                        },
                                        inherit: {
                                            _value: 209,
                                            _ver: null
                                        }
                                    },
                                    template: {
                                        document: [
                                            {
                                                code: {
                                                    _value: 1099999,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ],
                                                prohibition: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        event: [
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ],
                                                prohibition: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        thing: [
                                            {
                                                code: {
                                                    _value: 1000922,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ],
                                                prohibition: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        );
                    } else if (permission === 2 && prohibition === 2) {
                        // 異常：許可禁止両方未設定
                        res.status(ResponseCode.OK).json(
                            [
                                {
                                    catalogItem: {
                                        ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000438/sharing-restriction',
                                        name: '共有制限',
                                        description: 'テスト用共有制限',
                                        _code: {
                                            _value: 1001209,
                                            _var: 1
                                        },
                                        inherit: {
                                            _value: 209,
                                            _ver: null
                                        }
                                    },
                                    template: {
                                        document: [
                                            {
                                                code: {
                                                    _value: 1099999,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [],
                                                prohibition: []
                                            }
                                        ],
                                        event: [
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [],
                                                prohibition: []
                                            }
                                        ],
                                        thing: [
                                            {
                                                code: {
                                                    _value: 1000922,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [],
                                                prohibition: []
                                            }
                                        ]
                                    }
                                }
                            ]
                        );
                    } else if (permission === 1) {
                        // 正常：許可
                        res.status(ResponseCode.OK).json(
                            [
                                {
                                    catalogItem: {
                                        ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000437/sharing-restriction',
                                        name: '共有制限',
                                        description: 'テスト用共有制限',
                                        _code: {
                                            _value: 1001209,
                                            _var: 1
                                        },
                                        inherit: {
                                            _value: 209,
                                            _ver: null
                                        }
                                    },
                                    template: {
                                        document: [
                                            {
                                                code: {
                                                    _value: 9999999,
                                                    _ver: 1
                                                }
                                            },
                                            {
                                                code: {
                                                    _value: 1099999,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: null
                                                    },
                                                    {
                                                        region: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000451,
                                                                _ver: 1
                                                            }
                                                        ],
                                                        service: null
                                                    }
                                                ],
                                                prohibition: []
                                            }
                                        ],
                                        event: [
                                            {
                                                code: {
                                                    _value: 9999999,
                                                    _ver: 1
                                                }
                                            },
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: null
                                                    },
                                                    {
                                                        region: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000451,
                                                                _ver: 1
                                                            }
                                                        ],
                                                        service: null
                                                    }
                                                ],
                                                prohibition: []
                                            }
                                        ],
                                        thing: [
                                            {
                                                code: {
                                                    _value: 9999999,
                                                    _ver: 1
                                                }
                                            },
                                            {
                                                code: {
                                                    _value: 1000922,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: null
                                                    },
                                                    {
                                                        region: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000451,
                                                                _ver: 1
                                                            }
                                                        ],
                                                        service: null
                                                    }
                                                ],
                                                prohibition: []
                                            }
                                        ]
                                    }
                                }
                            ]
                        );
                    } else if (permission === 2) {
                        // 異常：許可
                        // ドキュメント
                        res.status(ResponseCode.OK).json(
                            [
                                {
                                    catalogItem: {
                                        ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000437/sharing-restriction',
                                        name: '共有制限',
                                        description: 'テスト用共有制限',
                                        _code: {
                                            _value: 1001209,
                                            _var: 1
                                        },
                                        inherit: {
                                            _value: 209,
                                            _ver: null
                                        }
                                    },
                                    template: {
                                        document: [
                                            {
                                                code: {
                                                    _value: 1099999,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000000,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ],
                                                prohibition: []
                                            }
                                        ],
                                        event: [
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000000,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ],
                                                prohibition: []
                                            }
                                        ],
                                        thing: [
                                            {
                                                code: {
                                                    _value: 1000922,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: [
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 1000000,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ],
                                                prohibition: []
                                            }
                                        ]
                                    }
                                }
                            ]
                        );
                    } else if (prohibition === 1) {
                        // 異常：禁止
                        res.status(ResponseCode.OK).json(
                            [
                                {
                                    catalogItem: {
                                        ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000438/sharing-restriction',
                                        name: '共有制限',
                                        description: 'テスト用共有制限',
                                        _code: {
                                            _value: 1001209,
                                            _var: 1
                                        },
                                        inherit: {
                                            _value: 209,
                                            _ver: null
                                        }
                                    },
                                    template: {
                                        document: [
                                            {
                                                code: {
                                                    _value: 1099999,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: null,
                                                prohibition: [
                                                    {
                                                        region: null,
                                                        service: null
                                                    },
                                                    {
                                                        region: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000451,
                                                                _ver: 1
                                                            }
                                                        ],
                                                        service: null
                                                    },
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        event: [
                                            {
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: null,
                                                prohibition: [
                                                    {
                                                        region: null,
                                                        service: null
                                                    },
                                                    {
                                                        region: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000451,
                                                                _ver: 1
                                                            }
                                                        ],
                                                        service: null
                                                    },
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        thing: [
                                            {
                                                code: {
                                                    _value: 1000922,
                                                    _ver: 1
                                                },
                                                event: [],
                                                permission: null,
                                                prohibition: [
                                                    {
                                                        region: null,
                                                        service: null
                                                    },
                                                    {
                                                        region: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000451,
                                                                _ver: 1
                                                            }
                                                        ],
                                                        service: null
                                                    },
                                                    {
                                                        region: null,
                                                        service: [
                                                            {
                                                                _value: 9999999,
                                                                _ver: 1
                                                            },
                                                            {
                                                                _value: 1000471,
                                                                _ver: 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        );
                    }
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000445/sharing-restriction') {
                    if (permission && prohibition) {
                        res.status(ResponseCode.OK).json(
                            [
                                {
                                    catalogItem: {
                                        ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000445/sharing-restriction',
                                        name: '共有制限',
                                        description: 'テスト用共有制限',
                                        _code: {
                                            _value: 1001210,
                                            _var: 1
                                        },
                                        inherit: {
                                            _value: 209,
                                            _ver: null
                                        }
                                    },
                                    template: {
                                        document:
                                            [
                                                {
                                                    code: {
                                                        _value: 1099999,
                                                        _ver: 1
                                                    },
                                                    event: [],
                                                    permission: [
                                                        {
                                                            region: [
                                                                {
                                                                    _value: 1000433,
                                                                    _ver: 1
                                                                }
                                                            ],
                                                            service: null
                                                        }
                                                    ],
                                                    prohibition: [
                                                        {
                                                            region: [
                                                                {
                                                                    _value: 1000433,
                                                                    _ver: 1
                                                                }
                                                            ],
                                                            service: null
                                                        }
                                                    ]
                                                }
                                            ],
                                        event:
                                            [
                                                {
                                                    code: {
                                                        _value: 1000008,
                                                        _ver: 1
                                                    },
                                                    event: [],
                                                    permission: [
                                                        {
                                                            region: [
                                                                {
                                                                    _value: 1000433,
                                                                    _ver: 1
                                                                }
                                                            ],
                                                            service: null
                                                        }
                                                    ],
                                                    prohibition: [
                                                        {
                                                            region: [
                                                                {
                                                                    _value: 1000433,
                                                                    _ver: 1
                                                                }
                                                            ],
                                                            service: null
                                                        }
                                                    ]
                                                }
                                            ],
                                        thing:
                                            [
                                                {
                                                    code: {
                                                        _value: 1000922,
                                                        _ver: 1
                                                    },
                                                    event: [],
                                                    permission: [
                                                        {
                                                            region: [
                                                                {
                                                                    _value: 1000433,
                                                                    _ver: 1
                                                                }
                                                            ],
                                                            service: null
                                                        }
                                                    ],
                                                    prohibition: [
                                                        {
                                                            region: [
                                                                {
                                                                    _value: 1000433,
                                                                    _ver: 1
                                                                }
                                                            ],
                                                            service: null
                                                        }
                                                    ]
                                                }
                                            ]
                                    }
                                }
                            ]
                        );
                    } else if (permission) {
                        res.status(ResponseCode.OK).json(
                            [
                                {
                                    catalogItem: {
                                        ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000445/sharing-restriction',
                                        name: '共有制限',
                                        description: 'テスト用共有制限',
                                        _code: {
                                            _value: 1001210,
                                            _var: 1
                                        },
                                        inherit: {
                                            _value: 209,
                                            _ver: null
                                        }
                                    },
                                    template: {
                                        document:
                                            [
                                                {
                                                    code: {
                                                        _value: 1099999,
                                                        _ver: 1
                                                    },
                                                    event: [],
                                                    permission: [
                                                        {
                                                            region: null,
                                                            service: [
                                                                {
                                                                    _value: 1000000,
                                                                    _ver: 1
                                                                },
                                                                {
                                                                    _value: 1000601,
                                                                    _ver: 1
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    prohibition: null
                                                }
                                            ],
                                        event:
                                            [
                                                {
                                                    code: {
                                                        _value: 1000008,
                                                        _ver: 1
                                                    },
                                                    event: [],
                                                    permission: [
                                                        {
                                                            region: null,
                                                            service: [
                                                                {
                                                                    _value: 1000000,
                                                                    _ver: 1
                                                                },
                                                                {
                                                                    _value: 1000601,
                                                                    _ver: 1
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    prohibition: null
                                                }
                                            ],
                                        thing:
                                            [
                                                {
                                                    code: {
                                                        _value: 1000922,
                                                        _ver: 1
                                                    },
                                                    event: [],
                                                    permission: [
                                                        {
                                                            region: null,
                                                            service: [
                                                                {
                                                                    _value: 1000000,
                                                                    _ver: 1
                                                                },
                                                                {
                                                                    _value: 1000601,
                                                                    _ver: 1
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    prohibition: null
                                                }
                                            ]
                                    }
                                }
                            ]
                        );
                    }
                }
                return;
            }
            res.status(status).end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.get('/catalog/name', _listener);
        this._app.get('/catalog/:code', _listener2);
        this._app.get('/catalog', _listener3);
        this._server = this._app.listen(port);
    }
}

export class StubCatalogServerStoreEventNotificateInvalidActor {
    _app: express.Express;
    _server: Server;
    constructor (port: number, status: number, permission: number, prohibition: number, type: number = 0) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
                return;
            }
            res.status(status).end();
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (code === 1000471) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000437/application',
                                name: 'FiNCアプリ',
                                descriptions: 'FiNCアプリの定義です。',
                                _code: {
                                    _value: 1000471,
                                    _ver: null
                                },
                                inherit: {
                                    _value: 41,
                                    _ver: null
                                }
                            },
                            template: {
                                prop: null,
                                'information-site': null,
                                'region-alliance': [
                                    {
                                        _value: 1000451,
                                        _ver: 1
                                    }
                                ],
                                share: [
                                    {
                                        _value: 1000472,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000473,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000474,
                                        _ver: 1
                                    }
                                ],
                                store: [
                                    {
                                        _value: 1000475,
                                        _ver: 1
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000437) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                                name: 'FiNC Technologies',
                                _code: {
                                    _value: 1000437,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 42,
                                    _ver: 1
                                },
                                description: 'FiNC Technologiesのアプリケーションです。'
                            },
                            template: {
                                _code: {
                                    _value: 1000437,
                                    _ver: 1
                                },
                                application: [
                                    {
                                        _value: 1000471,
                                        _ver: 1
                                    }
                                ],
                                'breakaway-flg': false,
                                category: null,
                                'information-site': null,
                                'main-block': null,
                                'other-block': null,
                                statement: [
                                    {
                                        title: '組織ステートメント',
                                        section: [
                                            {
                                                title: 'ご挨拶',
                                                content: [
                                                    {
                                                        sentence: 'for a healthier, happier future. お客さま一人ひとりに寄り添い、健康の先にある幸せな生活を実現する。'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                status: [
                                    {
                                        status: 'certified',
                                        by: {
                                            _value: 1000001,
                                            _ver: 1
                                        },
                                        at: '2020-01-01T00:00:00.000+0900'
                                    }
                                ]
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                }
                return;
            }
            res.status(status).end();
        };

        const _listener3 = (req: express.Request, res: express.Response) => {
            res.status(status).json([]).end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.get('/catalog/name', _listener);
        this._app.get('/catalog/:code', _listener2);
        this._app.get('/catalog', _listener3);
        this._server = this._app.listen(port);
    }
}

export class StubCatalogServerStoreEvent {
    _app: express.Express;
    _server: Server;
    constructor (port: number, status: number) {
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                const version = Number(req.params.version);
                if (code === 1000500 && version === 1) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/share',
                                name: 'テスト用共有定義',
                                description: 'テスト用共有定義です。',
                                _code: {
                                    _value: 1000500,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 40,
                                    _ver: null
                                }
                            },
                            template: {
                                prop: null,
                                share: [
                                    {
                                        id: 'a344bbbb-31ec-73a4-de42-f7c2549134b1',
                                        document: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000100,
                                                        _ver: 1
                                                    },
                                                    {
                                                        _value: 1000400,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                sourceActor: null,
                                                code: {
                                                    _value: 1000009,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ],
                                        event: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000200,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000801,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000806,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            },
                                            {
                                                sourceActor: null,
                                                code: {
                                                    _value: 1000802,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000807,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            }
                                        ],
                                        thing: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000300,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000810,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                sourceActor: null,
                                                code: {
                                                    _value: 1000811,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    },
                                    {
                                        id: '93514763-c409-a3c5-be27-1f0185aa2a5b',
                                        document: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000100,
                                                        _ver: 1
                                                    },
                                                    {
                                                        _value: 1000400,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ],
                                        event: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000200,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000801,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000806,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            }
                                        ],
                                        thing: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000300,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000810,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000501 && version === 1) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/share',
                                name: 'テスト用共有定義',
                                description: 'テスト用共有定義です。',
                                _code: {
                                    _value: 1000501,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 40,
                                    _ver: null
                                }
                            },
                            template: {
                                prop: null,
                                share: [
                                    {
                                        id: 'a344bbbb-31ec-73a4-de42-f7c2549134b1',
                                        document: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000100,
                                                        _ver: 1
                                                    },
                                                    {
                                                        _value: 1000400,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000008,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ],
                                        event: [],
                                        thing: []
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000502 && version === 1) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/share',
                                name: 'テスト用共有定義',
                                description: 'テスト用共有定義です。',
                                _code: {
                                    _value: 1000501,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 40,
                                    _ver: null
                                }
                            },
                            template: {
                                prop: null,
                                share: [
                                    {
                                        id: 'a344bbbb-31ec-73a4-de42-f7c2549134b1',
                                        document: [],
                                        event: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000200,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000801,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000806,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            }
                                        ],
                                        thing: []
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000503 && version === 1) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/share',
                                name: 'テスト用共有定義',
                                description: 'テスト用共有定義です。',
                                _code: {
                                    _value: 1000501,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 40,
                                    _ver: null
                                }
                            },
                            template: {
                                prop: null,
                                share: [
                                    {
                                        id: 'a344bbbb-31ec-73a4-de42-f7c2549134b1',
                                        document: [],
                                        event: [],
                                        thing: [
                                            {
                                                sourceActor: [
                                                    {
                                                        _value: 1000300,
                                                        _ver: 1
                                                    }
                                                ],
                                                code: {
                                                    _value: 1000810,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000504 && version === 1) {
                    res.status(ResponseCode.OK).json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/share',
                                name: 'テスト用共有定義',
                                description: 'テスト用共有定義です。',
                                _code: {
                                    _value: 1000501,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 40,
                                    _ver: null
                                }
                            },
                            template: {
                                prop: null,
                                share: [
                                    {
                                        id: 'a344bbbb-31ec-73a4-de42-f7c2549134b1',
                                        document: [],
                                        event: [],
                                        thing: []
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000465 && version === 1) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/share',
                            name: '【利用申込】医療・健康サービスの利用申込機能',
                            _code: {
                                _value: 1000465,
                                _ver: 1
                            },
                            inherit: {
                                _value: 40,
                                _ver: 1
                            },
                            description: '【利用申込】医療・健康サービスの利用申込機能です。'
                        },
                        template: {
                            _code: {
                                _value: 1000465,
                                _ver: 1
                            },
                            share: [
                                {
                                    id: '507bff6c-4842-c3d2-a288-df88698d446e',
                                    event: [
                                        {
                                            sourceActor: [
                                                {
                                                    _value: 1000001,
                                                    _ver: 1
                                                }
                                            ],
                                            code: {
                                                _value: 1000802,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000803,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'b87b27c1-5da8-37dd-6ee6-2c7831cf6a09',
                                    document: [
                                        {
                                            sourceActor: [
                                                {
                                                    _value: 1000001,
                                                    _ver: 1
                                                }
                                            ],
                                            code: {
                                                _value: 1001010,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        },
                                        {
                                            code: {
                                                _value: 1001011,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }
                                    ]
                                },
                                {
                                    id: '69db43f2-6643-19e9-117c-4bdece4bddd7',
                                    thing: [
                                        {
                                            sourceActor: [
                                                {
                                                    _value: 1000001,
                                                    _ver: 1
                                                }
                                            ],
                                            code: {
                                                _value: 1000502,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }
                                    ]
                                },
                                {
                                    id: '111971ca-42aa-241c-cd0a-c6434375f8f2',
                                    thing: [
                                        {
                                            code: {
                                                _value: 1000502,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }
                                    ]
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'share',
                                type: {
                                    of: 'inner[]',
                                    inner: 'Share',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '状態共有機能定義',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    });
                }
                res.end();
            }
            res.status(status).end();
        };
        this._app = express();
        this._app.get('/catalog/:code/:version', _listener);
        this._server = this._app.listen(port);
    }
}
export class StubCatalogServerIndTermsOfUse {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'test-org'
                });
            }
            res.status(status).end();
        };

        const _listener1 = (req: express.Request, res: express.Response) => {
            const body = JSON.parse(JSON.stringify(req.body));
            const response: {}[] = [];
            res.status(status);
            if (status === ResponseCode.OK) {
                for (const index in body) {
                    const code = Number(body[index]['_code']['_value']);
                    if (code === 1000004) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000104',
                                _code: {
                                    _value: 1000004,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000005) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000105',
                                _code: {
                                    _value: 1000005,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000006) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000106',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000007) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000107',
                                _code: {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000008) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000107',
                                _code: {
                                    _value: 1000008,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000009) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000108',
                                _code: {
                                    _value: 1000009,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000010) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000110',
                                _code: {
                                    _value: 1000010,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000011) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/terms-of-use/region/actor_1000111',
                                _code: {
                                    _value: 1000011,
                                    _ver: 1
                                }
                            },
                            template: {
                                'period-of-re-consent': '20200101T000000.000+0900'
                            }
                        });
                    } else if (code === 1000104 || code === 1000106 || code === 1000110) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/wf',
                                _code: {
                                    _value: code,
                                    _ver: null
                                }
                            }
                        });
                    } else if (code === 1000105 || code === 1000107 || code === 1000111) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                                _code: {
                                    _value: code,
                                    _ver: null
                                }
                            }
                        });
                    } else if (code === 1000108) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                                _code: {
                                    _value: 9999999,
                                    _ver: null
                                }
                            }
                        });
                    } else if (code === 1000304) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_1000104/share',
                                _code: {
                                    _value: 1000304,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000305) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/app/actor_1000105/share',
                                _code: {
                                    _value: 1000305,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000306) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_1000104/store',
                                _code: {
                                    _value: 1000306,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000307) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/app/actor_1000105/store',
                                _code: {
                                    _value: 1000307,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000308) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_1000106/share',
                                _code: {
                                    _value: 1000308,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000309) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/app/actor_1000107/share',
                                _code: {
                                    _value: 1000309,
                                    _ver: 1
                                }
                            }
                        });
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/app/actor_1000107/store',
                                _code: {
                                    _value: 1000309,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000310) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_1000106/store',
                                _code: {
                                    _value: 1000310,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000311) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/actor/store',
                                _code: {
                                    _value: 1000311,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000312) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/actor/share',
                                _code: {
                                    _value: 1000312,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000313) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/actor',
                                _code: {
                                    _value: 1000313,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000314) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_',
                                _code: {
                                    _value: 1000314,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000315) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/app/actor_',
                                _code: {
                                    _value: 1000315,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000316) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/wf/actor_1000110',
                                _code: {
                                    _value: 1000316,
                                    _ver: 1
                                }
                            }
                        });
                    } else if (code === 1000317) {
                        response.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/app/actor_1000111',
                                _code: {
                                    _value: 1000317,
                                    _ver: 1
                                }
                            }
                        });
                    } else {
                        res.status(ResponseCode.BAD_REQUEST).end();
                    }
                }
                res.json(response);
            }
            res.end();
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            const ns = req.query['ns'];
            if (status === ResponseCode.OK) {
                if (ns === 'catalog/ext/test-org/actor/region-root/actor_1000104/region') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/region-root/actor_1000104/region',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000004,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/wf/actor_1000104/workflow') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/wf/actor_1000104/workflow',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000004,
                                _ver: 1
                            },
                            store: [
                                {
                                    _value: 9999999,
                                    _ver: 1
                                },
                                {
                                    _value: 1000306,
                                    _ver: 1
                                }
                            ],
                            share: [
                                {
                                    _value: 9999999,
                                    _ver: 1
                                },
                                {
                                    _value: 1000304,
                                    _ver: 1
                                }
                            ]
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/region-root/actor_1000105/region') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/region-root/actor_1000105/region',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000005,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/app/actor_1000105/application') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/app/actor_1000105/application',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000005,
                                _ver: 1
                            },
                            store: [
                                {
                                    _value: 9999999,
                                    _ver: 1
                                },
                                {
                                    _value: 1000307,
                                    _ver: 1
                                }
                            ],
                            share: [
                                {
                                    _value: 9999999,
                                    _ver: 1
                                },
                                {
                                    _value: 1000305,
                                    _ver: 1
                                }
                            ]
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/region-root/actor_1000106/region') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/region-root/actor_1000106/region',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000004,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/wf/actor_1000106/workflow') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/wf/actor_1000106/workflow',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/region-root/actor_1000107/region') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/region-root/actor_1000107/region',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 9999999,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/app/actor_1000107/application') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/app/actor_1000107/application',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/region-root/actor_1000108/region') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/region-root/actor_1000108/region',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000009,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/region-root/actor_1000110/region') {
                    res.json([
                        {
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/region-root/actor_1000110/region',
                                _code: {
                                    _value: 9999999,
                                    _ver: 1
                                }
                            },
                            template: {
                                'terms-of-use': {
                                    _value: 1000010,
                                    _ver: 1
                                }
                            }
                        }
                    ]);
                } else if (ns === 'catalog/ext/test-org/actor/wf/actor_1000110/workflow') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/wf/actor_1000110/workflow',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/region-root/actor_1000111/region') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/region-root/actor_1000111/region',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000011,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'catalog/ext/test-org/actor/app/actor_1000111/application') {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/app/actor_1000111/application',
                            _code: {
                                _value: 9999999,
                                _ver: 1
                            }
                        },
                        template: {
                        }
                    }]);
                } else {
                    res.status(ResponseCode.BAD_REQUEST).end();
                }
            }
            res.status(status).end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.use(bodyParser.json());
        this._app.get('/catalog/name', _listener);
        this._app.post('/catalog', _listener1);
        this._app.get('/catalog', _listener2);
        this._server = this._app.listen(3001);
    }
}
export class StubCatalogServerDataStore {
    _app: express.Express;
    _server: Server;
    constructor (status: number, type?: number) {
        this._app = express();

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                res.status(200);
                // アクター確認
                if (code === 1000001) {
                    res.json({
                        catalogItem: {
                            ns: '/pxr-root'
                        }
                    });
                } else if (code === 1000020) {
                    res.json({
                        catalogItem: {
                            ns: '/data-trader'
                        },
                        template: {
                            'create-book': true
                        }
                    });
                } else if (code === 1001003) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1001006,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001005) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1001007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000004) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000014) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000017,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000104) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000114) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000117,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000204) {
                    res.json({
                        catalogItem: {
                            ns: '/data-trader'
                        }
                    });
                } else if (code === 1000304) {
                    res.json({
                        template: {
                            ns: '/data-trader'
                        }
                    });
                } else if (code === 1000404) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                        }
                    });
                } else if (code === 1000504) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000017,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000604) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                        }
                    });
                } else if (code === 1000704) {
                    res.json({
                        catalogItem: {
                            ns: '/app'
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000017,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000804) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000027,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000904) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000037,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001004) {
                    res.json({
                        catalogItem: {
                            ns: '/wf'
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000047,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000007) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000017) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                            ]
                        }
                    });
                } else if (code === 1000027) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000026,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000037) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000036,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000047) {
                    res.json({
                        catalogItem: {
                            ns: '/workflow'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000016,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000107) {
                    res.json({
                        catalogItem: {
                            ns: '/application'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1000106,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1000117) {
                    res.json({
                        catalogItem: {
                            ns: '/application'
                        },
                        template: {
                            store: [
                            ]
                        }
                    });
                } else if (code === 1000026) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                            ]
                        }
                    });
                } else if (code === 1000036) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    _value: 9999,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001006) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1001106,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001007) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    _value: 1001107,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 1001106) {
                    if (type !== 1) {
                        res.json({
                            catalogItem: {
                                ns: '/store',
                                _code: {
                                    _value: 1001106,
                                    _ver: 1
                                }
                            },
                            template: {
                                store: [
                                    {
                                        id: '1234567890',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        event: [{
                                            code: {
                                                _value: 1000009,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000014,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000819,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000820,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000010,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000821,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000011,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }]
                                    },
                                    {
                                        id: '1234567891',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        document: [
                                            {
                                                code: {
                                                    _value: 1001010,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1001011,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        });
                    } else if (type === 1) {
                        res.json({
                            catalogItem: {
                                ns: '/store',
                                _code: {
                                    _value: 1001106,
                                    _ver: 3
                                }
                            },
                            template: {
                                store: [
                                    {
                                        id: '1234567890',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        event: [{
                                            code: {
                                                _value: 1000009,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000014,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000819,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000820,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000010,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000821,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000822,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000011,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }]
                                    },
                                    {
                                        id: '1234567891',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        document: [
                                            {
                                                code: {
                                                    _value: 1001010,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1001011,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        });
                    }
                } else if (code === 1001107) {
                    res.json({
                        catalogItem: {
                            ns: '/store',
                            _code: {
                                _value: 1001106,
                                _ver: 1
                            }
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000009,
                                        _ver: 2
                                    }],
                                    thing: [{
                                        _value: 1000047,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1001108) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        code: {
                                            _value: 1000009,
                                            _ver: 1
                                        },
                                        requireConsent: true,
                                        thing: [
                                            {
                                                code: {
                                                    _value: 1000014,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1000819,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1000820,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    },
                                    {
                                        code: {
                                            _value: 1000010,
                                            _ver: 1
                                        },
                                        requireConsent: true,
                                        thing: [
                                            {
                                                code: {
                                                    _value: 1000821,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    },
                                    {
                                        code: {
                                            _value: 1000011,
                                            _ver: 1
                                        },
                                        requireConsent: true
                                    }]
                                },
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    document: [
                                        {
                                            code: {
                                                _value: 1001010,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        },
                                        {
                                            code: {
                                                _value: 1001011,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }
                                    ]
                                }
                            ]
                        }
                    });
                } else if (code === 1000006) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000009,
                                        _ver: 1
                                    }],
                                    thing: [{
                                        _value: 1000047,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1000016) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000005,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000019,
                                        _ver: 1
                                    }],
                                    thing: [{
                                        _value: 1000047,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1000106) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: [
                                {
                                    role: {
                                        _value: 1000105,
                                        _ver: 1
                                    },
                                    event: [{
                                        _value: 1000109,
                                        _ver: 1
                                    }],
                                    thing: [{
                                        _value: 1000147,
                                        _ver: 1
                                    }]
                                }
                            ]
                        }
                    });
                } else if (code === 1000009) {
                    res.json({
                        catalogItem: {
                            ns: '/event'
                        },
                        prop: [
                            {
                                key: 'code',
                                type: {
                                    of: 'item',
                                    _code: {
                                        _value: '18',
                                        _ver: '1'
                                    },
                                    candidate: null
                                },
                                description: 'イベント種別'
                            },
                            {
                                key: 'thing',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '1000014',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'モノの配列'
                            }
                        ]
                    });
                } else if (code === 1000019) {
                    res.json({
                        catalogItem: {
                            ns: '/event'
                        },
                        prop: [
                            {
                                key: 'thing',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: 'モノの配列'
                            }
                        ]
                    });
                } else if (code === 1000109) {
                    res.json({
                        catalogItem: {
                            ns: '/event'
                        },
                        prop: [
                            {
                                key: 'code',
                                type: {
                                    of: 'item',
                                    _code: {
                                        _value: '18',
                                        _ver: '1'
                                    },
                                    candidate: null
                                },
                                description: 'イベント種別'
                            },
                            {
                                key: 'thing',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '1000114',
                                                _ver: '1'
                                            },
                                            {
                                                _value: '1000115',
                                                _ver: '1'
                                            },
                                            {
                                                _value: '1000116',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'モノの配列'
                            }
                        ]
                    });
                } else if (code === 1010006) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                        }
                    });
                } else if (code === 1100006) {
                    res.json({
                        catalogItem: {
                            ns: '/store'
                        },
                        template: {
                            store: {}
                        }
                    });
                }
                res.end();
            } else {
                res.status(status).end();
            }
        };

        const _listener1 = (req: express.Request, res: express.Response) => {
            res.status(status);
            if (status === ResponseCode.OK) {
                if (type !== 1) {
                    const response: {}[] = [];
                    const body = JSON.parse(JSON.stringify(req.body));
                    for (const index in body) {
                        const code = Number(body[index]['_code']['_value']);
                        if (code === 1001106) {
                            response.push({
                                catalogItem: {
                                    ns: '/store',
                                    _code: {
                                        _value: 1001106,
                                        _ver: 1
                                    }
                                },
                                template: {
                                    store: [
                                        {
                                            role: {
                                                _value: 1000005,
                                                _ver: 1
                                            },
                                            id: 'b87b27c1-5da8-37dd-6ee6-2c7831cf6a09',
                                            event: [{
                                                code: {
                                                    _value: 1000009,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000014,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000015,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000015,
                                                            _ver: 2
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 9999999,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            },
                                            {
                                                code: {
                                                    _value: 1000010,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000017,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000017,
                                                            _ver: 2
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            }]
                                        },
                                        {
                                            role: {
                                                _value: 1000005,
                                                _ver: 1
                                            },
                                            id: 'ccc0c076-f73f-7ce1-7c5f-fdc1634aa5c1',
                                            event: [{
                                                code: {
                                                    _value: 1000011,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000018,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000018,
                                                            _ver: 2
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            },
                                            {
                                                code: {
                                                    _value: 1000010,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000821,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            },
                                            {
                                                code: {
                                                    _value: 1000011,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }]
                                        },
                                        {
                                            role: {
                                                _value: 1000005,
                                                _ver: 1
                                            },
                                            id: '69db43f2-6643-19e9-117c-4bdece4bddd7',
                                            document: [
                                                {
                                                    code: {
                                                        _value: 1001010,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1001011,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            });
                        } else if (code === 1001107) {
                            response.push({
                                catalogItem: {
                                    ns: '/store',
                                    _code: {
                                        _value: 1001107,
                                        _ver: 1
                                    }
                                },
                                template: {
                                    store: [
                                        {
                                            role: {
                                                _value: 1000005,
                                                _ver: 1
                                            },
                                            id: 'b87b27c1-5da8-37dd-6ee6-2c7831cf6a09',
                                            event: [{
                                                code: {
                                                    _value: 1000009,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000014,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000015,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000015,
                                                            _ver: 2
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 9999999,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            },
                                            {
                                                code: {
                                                    _value: 1000010,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000017,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000017,
                                                            _ver: 2
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            }]
                                        },
                                        {
                                            role: {
                                                _value: 1000005,
                                                _ver: 1
                                            },
                                            id: 'ccc0c076-f73f-7ce1-7c5f-fdc1634aa5c1',
                                            event: [{
                                                code: {
                                                    _value: 1000011,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000018,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000018,
                                                            _ver: 2
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            },
                                            {
                                                code: {
                                                    _value: 1000010,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000821,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            },
                                            {
                                                code: {
                                                    _value: 1000011,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }]
                                        },
                                        {
                                            role: {
                                                _value: 1000005,
                                                _ver: 1
                                            },
                                            id: '69db43f2-6643-19e9-117c-4bdece4bddd7',
                                            document: [
                                                {
                                                    code: {
                                                        _value: 1001010,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1001011,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            });
                        } else if (code === 1002106) {
                            response.push({
                                catalogItem: {
                                    ns: '/store',
                                    _code: {
                                        _value: 1002106,
                                        _ver: 1
                                    }
                                },
                                template: {
                                    store: [
                                        {
                                            role: {
                                                _value: 1000005,
                                                _ver: 1
                                            },
                                            id: 'b87b27c1-5da8-37dd-6ee6-2c7831cf6a09',
                                            event: [{
                                                code: {
                                                    _value: 1000010,
                                                    _ver: 1
                                                },
                                                requireConsent: true,
                                                thing: [
                                                    {
                                                        code: {
                                                            _value: 1000014,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000015,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 1000015,
                                                            _ver: 2
                                                        },
                                                        requireConsent: true
                                                    },
                                                    {
                                                        code: {
                                                            _value: 9999999,
                                                            _ver: 1
                                                        },
                                                        requireConsent: true
                                                    }
                                                ]
                                            }]
                                        }
                                    ]
                                }
                            });
                        }
                    }
                    if (response.length) {
                        res.json(response);
                    }
                    res.json(null);
                } else if (type === 1) {
                    res.json([
                        {
                            catalogItem: {
                                ns: '/store',
                                _code: {
                                    _value: 1001106,
                                    _ver: 1
                                }
                            },
                            template: {
                                store: [
                                    {
                                        id: '1234567890',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        event: [{
                                            code: {
                                                _value: 1000009,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000014,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000819,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000820,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000010,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000821,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000011,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }]
                                    },
                                    {
                                        id: '1234567891',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        document: [
                                            {
                                                code: {
                                                    _value: 1001010,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1001011,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            catalogItem: {
                                ns: '/store',
                                _code: {
                                    _value: 1001106,
                                    _ver: 2
                                }
                            },
                            template: {
                                store: [
                                    {
                                        id: '1234567890',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        event: [{
                                            code: {
                                                _value: 1000009,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000014,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000819,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000820,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000010,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000821,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000011,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        },
                                        {
                                            code: {
                                                _value: 1000012,
                                                _ver: 1
                                            },
                                            requireConsent: false,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000822,
                                                        _ver: 1
                                                    },
                                                    requireConsent: false
                                                }
                                            ]
                                        }]
                                    },
                                    {
                                        id: '1234567891',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        document: [
                                            {
                                                code: {
                                                    _value: 1001010,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1001011,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1001012,
                                                    _ver: 1
                                                },
                                                requireConsent: false
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            catalogItem: {
                                ns: '/store',
                                _code: {
                                    _value: 1001106,
                                    _ver: 3
                                }
                            },
                            template: {
                                store: [
                                    {
                                        id: '1234567890',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        event: [{
                                            code: {
                                                _value: 1000009,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000014,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000819,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000820,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000010,
                                                _ver: 1
                                            },
                                            requireConsent: true,
                                            thing: [
                                                {
                                                    code: {
                                                        _value: 1000821,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                },
                                                {
                                                    code: {
                                                        _value: 1000822,
                                                        _ver: 1
                                                    },
                                                    requireConsent: true
                                                }
                                            ]
                                        },
                                        {
                                            code: {
                                                _value: 1000011,
                                                _ver: 1
                                            },
                                            requireConsent: true
                                        }]
                                    },
                                    {
                                        id: '1234567891',
                                        role: {
                                            _value: 1000005,
                                            _ver: 1
                                        },
                                        document: [
                                            {
                                                code: {
                                                    _value: 1001010,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            },
                                            {
                                                code: {
                                                    _value: 1001011,
                                                    _ver: 1
                                                },
                                                requireConsent: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]);
                }
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.use(bodyParser.json());
        this._app.get('/catalog/:code/:version', _listener);
        this._app.get('/catalog/:code', _listener);
        this._app.post('/catalog', _listener1);
        this._server = this._app.listen(3001);
    }
}
export class StubCatalogServerShare {
    _app: express.Express;
    _server: Server;
    constructor (status: number, nsNum: number) {
        this._app = express();

        // イベントハンドラー
        const _actor = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                res.status(200);
                // wf/appカタログ
                if (code === 1000004) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 1000004,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000014) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 1000004,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000024) {
                    // 異常系：アクターとの関係がなく共有不可（対ワークフロー）
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 1000094,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000064) {
                    // 正常系
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 1000064,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000074) {
                    // 正常系
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 1000074,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000054) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 1000004,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000004) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000004,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000014) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000014,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000024) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000024,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000034) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000034,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000044) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000044,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000054) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000054,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000064) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000064,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000074) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000074,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000084) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000084,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000094) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000094,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000104) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000104,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000114) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000114,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000124) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000124,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 2000134) {
                    res.json({
                        catalogItem: {
                            ns: 'workflow',
                            _code: {
                                _value: 2000134,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000005) {
                    res.json({
                        catalogItem: {
                            ns: 'application',
                            _code: {
                                _value: 1000005,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000015) {
                    res.json({
                        catalogItem: {
                            ns: 'application',
                            _code: {
                                _value: 1000005,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000025) {
                    // 異常系：アクターとの関係がなく共有不可（対アプリケーション）
                    res.json({
                        catalogItem: {
                            ns: 'application',
                            _code: {
                                _value: 1000095,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000035) {
                    // 正常系
                    res.json({
                        catalogItem: {
                            ns: 'application',
                            _code: {
                                _value: 1000035,
                                _ver: 1
                            }
                        }
                    });
                    // actorカタログ
                } else if (code === 2000001) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/',
                            _code: {
                                _value: 2000001,
                                _ver: 1
                            }
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 1000004,
                                    _ver: 1
                                },
                                {
                                    _value: 1000064,
                                    _ver: 1
                                },
                                {
                                    _value: 1000074,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 2000002) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/',
                            ext_name: 'test-org',
                            name: 'test-org',
                            _code: {
                                _value: 2000002,
                                _ver: 1
                            }
                        },
                        template: {
                            application: [
                                {
                                    _value: 1000005,
                                    _ver: 1
                                },
                                {
                                    _value: 1000035,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                } else if (code === 2000003) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/',
                            ext_name: 'test-org',
                            name: 'test-org',
                            _code: {
                                _value: 1000007,
                                _ver: 1
                            }
                        },
                        template: {
                            workflow: [
                                {
                                    _value: 2000004,
                                    _ver: 1
                                },
                                {
                                    _value: 2000014,
                                    _ver: 1
                                },
                                {
                                    _value: 2000024,
                                    _ver: 1
                                },
                                {
                                    _value: 2000034,
                                    _ver: 1
                                },
                                {
                                    _value: 2000044,
                                    _ver: 1
                                },
                                {
                                    _value: 2000054,
                                    _ver: 1
                                },
                                {
                                    _value: 2000064,
                                    _ver: 1
                                },
                                {
                                    _value: 2000074,
                                    _ver: 1
                                },
                                {
                                    _value: 2000084,
                                    _ver: 1
                                },
                                {
                                    _value: 2000094,
                                    _ver: 1
                                },
                                {
                                    _value: 2000104,
                                    _ver: 1
                                },
                                {
                                    _value: 2000114,
                                    _ver: 1
                                },
                                {
                                    _value: 2000124,
                                    _ver: 1
                                },
                                {
                                    _value: 2000134,
                                    _ver: 1
                                }
                            ]
                        }
                    });
                }
            }
            res.status(status).end();
        };
        const _extName = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (nsNum === 0) {
                    res.json({
                        ext_name: 'test-org'
                    });
                } else {
                    res.json({
                        ext_name: 'dummy'
                    });
                }
            }
            res.status(status).end();
        };

        const _ns = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.status(200);
                const ns = req.query['ns'];
                if (ns === 'catalog/ext/test-org/document/') {
                    // 正常：document
                    res.json([
                        { ns: 'document01' },
                        { ns: 'document02' }
                    ]);
                } else if (ns === 'catalog/ext/test-org/event/') {
                    // 正常：event
                    res.json([{
                        ns: 'event01'
                    }]);
                } else if (ns === 'catalog/ext/test-org/thing/') {
                    // 正常：thing
                    res.json([{
                        ns: 'thing01'
                    }]);
                } else {
                    res.json({ ns: ns });
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        const _item = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.status(200);
                const ns = req.query['ns'];
                if (ns === 'document01') {
                    // 正常：document
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/document/',
                            _code: {
                                _value: 1000006,
                                _ver: 1
                            }
                        }
                    },
                    {
                        catalogItem: {
                            ns: 'catalog/ext/test-org/document/',
                            _code: {
                                _value: 1000046,
                                _ver: 1
                            }
                        }
                    },
                    {
                        catalogItem: {
                            ns: 'catalog/ext/test-org/document/',
                            _code: {
                                _value: 1000056,
                                _ver: 1
                            }
                        }
                    },
                    {
                        catalogItem: {
                            ns: 'catalog/ext/test-org/document/',
                            _code: {
                                _value: 1000066,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'document02') {
                    // 正常：document
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/event/',
                            name: 'event',
                            _code: {
                                _value: 1000016,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'event01') {
                    // 正常：event
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/event/',
                            name: 'event',
                            _code: {
                                _value: 1000008,
                                _ver: 1
                            }
                        }
                    },
                    {
                        catalogItem: {
                            ns: 'catalog/ext/test-org/event/',
                            name: 'event',
                            _code: {
                                _value: 1000068,
                                _ver: 1
                            }
                        }
                    }]);
                } else if (ns === 'thing01') {
                    // 正常：thing
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/test-org/thing/',
                            name: 'thing',
                            _code: {
                                _value: 1000011,
                                _ver: 1
                            }
                        }
                    },
                    {
                        catalogItem: {
                            ns: 'catalog/ext/test-org/thing/',
                            name: 'thing',
                            _code: {
                                _value: 1000061,
                                _ver: 1
                            }
                        }
                    }]);
                } else {
                    res.json({ ns: ns });
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/name', _extName);
        this._app.get('/catalog/ns/', _ns);
        this._app.get('/catalog/:code', _actor);
        this._app.get('/catalog/', _item);
        this._server = this._app.listen(3001);
    }
}
export class StubCatalogServerShareGetNsError {
    _app: express.Express;
    _server: Server;
    constructor (status: number, nsNum: number) {
        this._app = express();

        // イベントハンドラー
        const _actor = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            res.status(200);
            // wf/appカタログ
            if (code === 1000004) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 1000004,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000014) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 1000004,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000024) {
                // 異常系：アクターとの関係がなく共有不可（対ワークフロー）
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 1000094,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000064) {
                // 正常系
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 1000064,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000074) {
                // 正常系
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 1000074,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000054) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 1000004,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000004) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000004,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000014) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000014,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000024) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000024,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000034) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000034,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000044) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000044,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000054) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000054,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000064) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000064,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000074) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000074,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000084) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000084,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000094) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000094,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000104) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000104,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000114) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000114,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000124) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000124,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 2000134) {
                res.json({
                    catalogItem: {
                        ns: 'workflow',
                        _code: {
                            _value: 2000134,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000005) {
                res.json({
                    catalogItem: {
                        ns: 'application',
                        _code: {
                            _value: 1000005,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000015) {
                res.json({
                    catalogItem: {
                        ns: 'application',
                        _code: {
                            _value: 1000005,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000025) {
                // 異常系：アクターとの関係がなく共有不可（対アプリケーション）
                res.json({
                    catalogItem: {
                        ns: 'application',
                        _code: {
                            _value: 1000095,
                            _ver: 1
                        }
                    }
                });
            } else if (code === 1000035) {
                // 正常系
                res.json({
                    catalogItem: {
                        ns: 'application',
                        _code: {
                            _value: 1000035,
                            _ver: 1
                        }
                    }
                });
                // actorカタログ
            } else if (code === 2000001) {
                res.json({
                    catalogItem: {
                        ns: 'catalog/ext/test-org/actor/',
                        _code: {
                            _value: 1000006,
                            _ver: 1
                        }
                    },
                    template: {
                        workflow: [
                            {
                                _value: 1000004,
                                _ver: 1
                            },
                            {
                                _value: 1000064,
                                _ver: 1
                            },
                            {
                                _value: 1000074,
                                _ver: 1
                            }
                        ]
                    }
                });
            } else if (code === 2000002) {
                res.json({
                    catalogItem: {
                        ns: 'catalog/ext/test-org/actor/',
                        ext_name: 'test-org',
                        name: 'test-org',
                        _code: {
                            _value: 1000006,
                            _ver: 1
                        }
                    },
                    template: {
                        application: [
                            {
                                _value: 1000005,
                                _ver: 1
                            },
                            {
                                _value: 1000035,
                                _ver: 1
                            }
                        ]
                    }
                });
            } else if (code === 2000003) {
                res.json({
                    catalogItem: {
                        ns: 'catalog/ext/test-org/actor/',
                        ext_name: 'test-org',
                        name: 'test-org',
                        _code: {
                            _value: 1000007,
                            _ver: 1
                        }
                    },
                    template: {
                        workflow: [
                            {
                                _value: 2000004,
                                _ver: 1
                            },
                            {
                                _value: 2000014,
                                _ver: 1
                            },
                            {
                                _value: 2000024,
                                _ver: 1
                            },
                            {
                                _value: 2000034,
                                _ver: 1
                            },
                            {
                                _value: 2000044,
                                _ver: 1
                            },
                            {
                                _value: 2000054,
                                _ver: 1
                            },
                            {
                                _value: 2000064,
                                _ver: 1
                            },
                            {
                                _value: 2000074,
                                _ver: 1
                            },
                            {
                                _value: 2000084,
                                _ver: 1
                            },
                            {
                                _value: 2000094,
                                _ver: 1
                            },
                            {
                                _value: 2000104,
                                _ver: 1
                            },
                            {
                                _value: 2000114,
                                _ver: 1
                            },
                            {
                                _value: 2000124,
                                _ver: 1
                            },
                            {
                                _value: 2000134,
                                _ver: 1
                            }
                        ]
                    }
                });
            }
            res.status(status).end();
        };
        const _extName = (req: express.Request, res: express.Response) => {
            if (nsNum === 0) {
                res.json({
                    ext_name: 'test-org'
                });
            } else {
                res.json({
                    ext_name: 'dummy'
                });
            }
            res.status(200).end();
            if (!status) {
                this._server.close();
            }
        };

        const _ns = (req: express.Request, res: express.Response) => {
            res.status(status).end();
        };

        const _item = (req: express.Request, res: express.Response) => {
            res.status(200);
            const ns = req.query['ns'];
            if (ns === 'document01') {
                // 正常：document
                res.json([{
                    catalogItem: {
                        ns: 'catalog/ext/test-org/document/',
                        _code: {
                            _value: 1000006,
                            _ver: 1
                        }
                    }
                },
                {
                    catalogItem: {
                        ns: 'catalog/ext/test-org/document/',
                        _code: {
                            _value: 1000066,
                            _ver: 1
                        }
                    }
                }]);
            } else if (ns === 'document02') {
                // 正常：document
                res.json([{
                    catalogItem: {
                        ns: 'catalog/ext/test-org/event/',
                        name: 'event',
                        _code: {
                            _value: 1000016,
                            _ver: 1
                        }
                    }
                }]);
            } else if (ns === 'event01') {
                // 正常：event
                res.json([{
                    catalogItem: {
                        ns: 'catalog/ext/test-org/event/',
                        name: 'event',
                        _code: {
                            _value: 1000008,
                            _ver: 1
                        }
                    }
                },
                {
                    catalogItem: {
                        ns: 'catalog/ext/test-org/event/',
                        name: 'event',
                        _code: {
                            _value: 1000068,
                            _ver: 1
                        }
                    }
                }]);
            } else if (ns === 'thing01') {
                // 正常：thing
                res.json([{
                    catalogItem: {
                        ns: 'catalog/ext/test-org/thing/',
                        name: 'thing',
                        _code: {
                            _value: 1000011,
                            _ver: 1
                        }
                    }
                },
                {
                    catalogItem: {
                        ns: 'catalog/ext/test-org/thing/',
                        name: 'thing',
                        _code: {
                            _value: 1000061,
                            _ver: 1
                        }
                    }
                }]);
            } else {
                res.json({ ns: ns });
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/name', _extName);
        this._app.get('/catalog/ns/', _ns);
        this._app.get('/catalog/:code', _actor);
        this._app.get('/catalog/', _item);
        this._server = this._app.listen(3001);
    }
}

export class StubTermsOfUseCatalogServer {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
                return;
            }
            res.status(status).end();
        };
        const _listener1 = (req: express.Request, res: express.Response) => {
            res.status(status);
            if (status === ResponseCode.OK) {
                const ns = req.query['ns'];
                if (ns === 'catalog/ext/aaa-healthcare-consortium/setting/global') {
                    res.json([
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/setting/global',
                                name: 'PXR：グローバル設定',
                                _code: {
                                    _value: 1000374,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 160,
                                    _ver: 1
                                },
                                description: 'PXR全体のグローバル設定の定義です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000374,
                                    _ver: 1
                                },
                                'account-lock-count': 6,
                                'account-lock-release-time': {
                                    type: 'minute',
                                    value: 30
                                },
                                'app-p-name': 'アプリケーションプロバイダー',
                                'book-name': 'ヘルスケアNOTE',
                                'book-open-code-expiration': {
                                    type: 'minute',
                                    value: 10
                                },
                                'book-open-notification-interval': {
                                    type: 'day',
                                    value: 1
                                },
                                book_create_sms_message: '%s?ID=%s パスワード: %s',
                                'catalog-name': 'PXRカタログ',
                                'coin-name': 'PXRコイン',
                                'data-consumer-name': 'データコンシューマー',
                                'data-trader-name': 'データ取引サービスプロバイダー',
                                help_contact: {
                                    title: 'ヘルプ・問い合わせ',
                                    section: [
                                        {
                                            title: 'ヘルプ・問い合わせ',
                                            content: [
                                                {
                                                    sentence: 'ヘルプ・問い合わせです。'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                'identity-verification-expiration': {
                                    type: 'day',
                                    value: 7
                                },
                                login_sms_message: 'PXRポータルのワンタイムログインコードは %s です。',
                                management_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                                management_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                                management_initial_login_description: {
                                    title: '初回ログインURL通知文書説明',
                                    section: [
                                        {
                                            title: '初回ログインURL通知文書説明',
                                            content: [
                                                {
                                                    sentence: '初回ログインURL通知文書説明'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                management_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                                management_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                                management_password_similarity_check: true,
                                onboarding_start: {
                                    title: 'Onboarding',
                                    section: [
                                        {
                                            title: 'PXRエコシステムとは',
                                            content: [
                                                {
                                                    sentence: 'PXRエコシステム説明'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                onboarding_store: {
                                    title: 'データ蓄積設定',
                                    section: [
                                        {
                                            title: 'データ蓄積設定',
                                            content: [
                                                {
                                                    sentence: 'データ蓄積設定説明'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                'one-time-login-code-expiration': null,
                                open_book_automatically: true,
                                'password-expiration': {
                                    type: 'day',
                                    value: 90
                                },
                                'password-generations-number': 4,
                                personal_account_delete: false,
                                personal_account_delete_ng_message: 'アカウント削除をご希望の場合はお問合せ下さい。',
                                personal_disassociation: true,
                                personal_initial_login_description: {
                                    title: 'Book開設時のQRコード通知文書説明',
                                    section: [
                                        {
                                            title: 'Book開設時のQRコード通知文書説明',
                                            content: [
                                                {
                                                    sentence: 'Book開設時のQRコード通知文書説明'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                personal_share_basic_policy: false,
                                'personal_two-step_verification': true,
                                'portal-name': 'My PXR',
                                'pxr-root-name': '流通制御サービスプロバイダー',
                                pxr_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                                pxr_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                                pxr_id_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                                pxr_id_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                                pxr_id_password_similarity_check: true,
                                pxr_id_prefix: '',
                                pxr_id_suffix: '',
                                'region-root-name': '領域運営サービスプロバイダー',
                                'region-tou_re-consent_notification_interval': {
                                    value: 7,
                                    type: 'days'
                                },
                                'platform-tou_re-consent_notification_interval': {
                                    value: 7,
                                    type: 'days'
                                },
                                search_target_ns: [
                                    {
                                        name: 'データカテゴリ',
                                        ns: 'catalog/ext/aaa-healthcare-consortium/attribute/category/data'
                                    }
                                ],
                                'service-name': 'サービス',
                                service_category_for_data_category: [
                                    {
                                        service: {
                                            _value: 1000065,
                                            _ver: 1
                                        },
                                        dataCategory: [
                                            {
                                                _value: 1000137,
                                                _ver: 1
                                            }
                                        ]
                                    }
                                ],
                                service_category_for_workflow: [
                                    {
                                        service: {
                                            _value: 1000065,
                                            _ver: 1
                                        },
                                        workflow_p: {
                                            _value: 1000438,
                                            _ver: 1
                                        },
                                        workflow: {
                                            _value: 1000481,
                                            _ver: 1
                                        }
                                    }
                                ],
                                'session-expiration': {
                                    type: 'hour',
                                    value: 3
                                },
                                'system-name': 'aaaデジタルヘルスプラットフォーム',
                                terms_of_service: {
                                    title: '利用規約',
                                    section: [
                                        {
                                            title: '利用規約',
                                            content: [
                                                {
                                                    sentence: '利用規約です。'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                'use_app-p': true,
                                use_id_connect: false,
                                use_share: true,
                                use_supply: true,
                                'use_wf-p': true,
                                'wf-p-name': 'ワークフロープロバイダー',
                                'workflow-name': 'ワークフロー'
                            },
                            prop: [
                                {
                                    key: 'account-lock-count',
                                    type: {
                                        of: 'number',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'アカウントロックまでの試行上限回数',
                                    isInherit: true
                                },
                                {
                                    key: 'account-lock-release-time',
                                    type: {
                                        of: 'inner',
                                        inner: 'Expiration',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'アカウントロック解除までの時間',
                                    isInherit: true
                                },
                                {
                                    key: 'app-p-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'アプリケーションプロバイダーの呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'book-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'My-Condition-Book呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'book-open-code-expiration',
                                    type: {
                                        of: 'inner',
                                        inner: 'Expiration',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'Book開設申請コード有効期限',
                                    isInherit: true
                                },
                                {
                                    key: 'book-open-notification-interval',
                                    type: {
                                        of: 'inner',
                                        inner: 'Expiration',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'Book開設申請通知間隔',
                                    isInherit: true
                                },
                                {
                                    key: 'book_create_sms_message',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'Book作成時SMSメッセージ内容',
                                    isInherit: true
                                },
                                {
                                    key: 'catalog-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'My-Condition-Dataカタログ呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'coin-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXRコイン呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'data-consumer-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'データコンシューマーの呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'data-trader-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'データ取引サービスプロバイダーの呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'help_contact',
                                    type: {
                                        of: 'item',
                                        _code: null,
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: 'ヘルプ・問い合わせ',
                                    isInherit: true
                                },
                                {
                                    key: 'identity-verification-expiration',
                                    type: {
                                        of: 'inner',
                                        inner: 'Expiration',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: '本人性確認コード有効期限',
                                    isInherit: true
                                },
                                {
                                    key: 'login_sms_message',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '個人ポータルログイン時SMSメッセージ内容',
                                    isInherit: true
                                },
                                {
                                    key: 'management_id_format',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '運営ポータル群のIDフォーマット',
                                    isInherit: true
                                },
                                {
                                    key: 'management_id_format_errormessage',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '運営ポータル群のIDフォーマットエラーメッセージ',
                                    isInherit: true
                                },
                                {
                                    key: 'management_initial_login_description',
                                    type: {
                                        of: 'item',
                                        _code: null,
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: '運営ポータル：初回ログインURL通知文書説明文',
                                    isInherit: true
                                },
                                {
                                    key: 'management_password_format',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '運営ポータル群のパスワードフォーマット',
                                    isInherit: true
                                },
                                {
                                    key: 'management_password_format_errormessage',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '運営ポータル群のパスワードフォーマットエラーメッセージ',
                                    isInherit: true
                                },
                                {
                                    key: 'management_password_similarity_check',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '運営ポータル群のパスワード類似性チェックを行う',
                                    isInherit: true
                                },
                                {
                                    key: 'onboarding_start',
                                    type: {
                                        of: 'item',
                                        _code: null,
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: '個人ポータル開始時のオンボーディング記載内容',
                                    isInherit: true
                                },
                                {
                                    key: 'onboarding_store',
                                    type: {
                                        of: 'item',
                                        _code: null,
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: '個人ポータル蓄積設定時のオンボーディング記載内容',
                                    isInherit: true
                                },
                                {
                                    key: 'one-time-login-code-expiration',
                                    type: {
                                        of: 'inner',
                                        inner: 'Expiration',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'ワンタイムログインコード有効期限',
                                    isInherit: true
                                },
                                {
                                    key: 'open_book_automatically',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '自動Book開設フラグ',
                                    isInherit: true
                                },
                                {
                                    key: 'password-expiration',
                                    type: {
                                        of: 'inner',
                                        inner: 'Expiration',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'パスワード有効期限',
                                    isInherit: true
                                },
                                {
                                    key: 'password-generations-number',
                                    type: {
                                        of: 'number',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'パスワード世代管理数',
                                    isInherit: true
                                },
                                {
                                    key: 'personal_account_delete',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '個人ポータル：アカウント削除の可否設定',
                                    isInherit: true
                                },
                                {
                                    key: 'personal_account_delete_ng_message',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '個人ポータル：アカウント削除できない設定時の表示メッセージ内容',
                                    isInherit: true
                                },
                                {
                                    key: 'personal_disassociation',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '個人ポータル：連携解除可否設定',
                                    isInherit: true
                                },
                                {
                                    key: 'personal_initial_login_description',
                                    type: {
                                        of: 'item',
                                        _code: null,
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: 'Book開設時のQRコード通知文書説明文',
                                    isInherit: true
                                },
                                {
                                    key: 'personal_share_basic_policy',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '個人ポータル：共有の基本方針可否設定',
                                    isInherit: true
                                },
                                {
                                    key: 'personal_two-step_verification',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '個人ポータル：2段階認証解除可否設定',
                                    isInherit: true
                                },
                                {
                                    key: 'portal-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '個人ポータル呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr-root-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '流通制御サービスプロバイダーの呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr_id_format',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXR-IDフォーマット',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr_id_format_errormessage',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXR-IDフォーマットエラーメッセージ',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr_id_password_format',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXR-IDのパスワードフォーマット',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr_id_password_format_errormessage',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXR-IDのパスワードフォーマットエラーメッセージ',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr_id_password_similarity_check',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: 'PXR-IDのパスワード類似性チェックを行う',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr_id_prefix',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXR-IDのprefix',
                                    isInherit: true
                                },
                                {
                                    key: 'pxr_id_suffix',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXR-IDのsuffix',
                                    isInherit: true
                                },
                                {
                                    key: 'region-root-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '領域運営サービスプロバイダーの名称',
                                    isInherit: true
                                },
                                {
                                    key: 'search_target_ns',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'SearchTargetNs',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: '検索対象ネームスペース',
                                    isInherit: true
                                },
                                {
                                    key: 'service-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'サービス名',
                                    isInherit: true
                                },
                                {
                                    key: 'service_category_for_data_category',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'ServiceCategoryForDataCategory',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'データカテゴリ用サービスカテゴリ',
                                    isInherit: true
                                },
                                {
                                    key: 'service_category_for_workflow',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'ServiceCategoryForWorkflow',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'ワークフロー用サービスカテゴリ',
                                    isInherit: true
                                },
                                {
                                    key: 'session-expiration',
                                    type: {
                                        of: 'inner',
                                        inner: 'Expiration',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: 'セッション有効期限',
                                    isInherit: true
                                },
                                {
                                    key: 'system-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'PXRエコシステム基盤呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'terms_of_service',
                                    type: {
                                        of: 'item',
                                        _code: null,
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: '利用規約',
                                    isInherit: true
                                },
                                {
                                    key: 'use_app-p',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: 'アプリケーションプロバイダーの使用設定',
                                    isInherit: true
                                },
                                {
                                    key: 'use_id_connect',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: 'IDサービスの使用設定',
                                    isInherit: true
                                },
                                {
                                    key: 'use_share',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '共有の使用設定',
                                    isInherit: true
                                },
                                {
                                    key: 'use_supply',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '提供の使用設定',
                                    isInherit: true
                                },
                                {
                                    key: 'use_wf-p',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: 'ワークフロープロバイダーの使用設定',
                                    isInherit: true
                                },
                                {
                                    key: 'wf-p-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'ワークフロープロバイダーの呼称',
                                    isInherit: true
                                },
                                {
                                    key: 'workflow-name',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: 'ワークフローの呼称',
                                    isInherit: true
                                }
                            ],
                            attribute: null
                        }
                    ]);
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000001/region') {
                    res.json([
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000001/region',
                                name: '高齢者向け健康サポート',
                                description: '高齢者向け健康サポートのリージョンの定義です。',
                                _code: {
                                    _value: 1000209,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 48,
                                    _ver: null
                                }
                            },
                            template: {
                                _code: {
                                    _value: 1000451,
                                    _ver: 51
                                },
                                'app-alliance': [
                                    {
                                        _value: 1000461,
                                        _ver: 13
                                    },
                                    {
                                        _value: 1000462,
                                        _ver: 7
                                    },
                                    {
                                        _value: 1000471,
                                        _ver: 7
                                    },
                                    {
                                        _value: 1000481,
                                        _ver: 36
                                    },
                                    {
                                        _value: 1000482,
                                        _ver: 14
                                    },
                                    {
                                        _value: 1000483,
                                        _ver: 2
                                    }
                                ],
                                'information-site': null,
                                required_app: null,
                                required_wf: null,
                                statement: [
                                    {
                                        title: 'リージョンステートメント',
                                        section: [
                                            {
                                                title: 'ステートメント',
                                                content: [
                                                    {
                                                        sentence: '高齢者が医療・健康サービスを簡単に受けられるようにサポートするアプリの提供と利用講習会の開催などを行っています。'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                status: 'open',
                                'terms-of-use': {
                                    _value: 1000109,
                                    _ver: 1
                                },
                                'wf-alliance': null
                            },
                            inner: null,
                            attribute: null
                        },
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000001/region',
                                name: '高齢者向け健康サポート',
                                description: '高齢者向け健康サポートのリージョンの定義です。',
                                _code: {
                                    _value: 1000210,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 48,
                                    _ver: null
                                }
                            },
                            template: {
                                _code: {
                                    _value: 1000451,
                                    _ver: 51
                                },
                                'app-alliance': null,
                                'information-site': null,
                                required_app: null,
                                required_wf: null,
                                statement: [
                                    {
                                        title: 'リージョンステートメント',
                                        section: [
                                            {
                                                title: 'ステートメント',
                                                content: [
                                                    {
                                                        sentence: '高齢者が医療・健康サービスを簡単に受けられるようにサポートするアプリの提供と利用講習会の開催などを行っています。'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                status: 'open',
                                'terms-of-use': {
                                    _value: 1000109,
                                    _ver: 1
                                },
                                'wf-alliance': null
                            },
                            inner: null,
                            attribute: null
                        }
                    ]);
                } else if (ns === 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000002/region') {
                    res.json([
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000002/region',
                                name: '子育てサポート',
                                description: '子育てサポートのリージョンの定義です。',
                                _code: {
                                    _value: 1000209,
                                    _ver: null
                                },
                                inherit: {
                                    _value: 48,
                                    _ver: null
                                }
                            },
                            template: {
                                _code: {
                                    _value: 1000452,
                                    _ver: 4
                                },
                                'app-alliance': [
                                    {
                                        _value: 1000461,
                                        _ver: 1
                                    }
                                ],
                                'information-site': null,
                                required_app: null,
                                required_wf: null,
                                statement: [
                                    {}
                                ],
                                'terms-of-use': {
                                    _value: 1001017,
                                    _ver: 1
                                },
                                'wf-alliance': [
                                    {
                                        _value: 1000438,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000439,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000441,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000442,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000444,
                                        _ver: 1
                                    }
                                ]
                            },
                            inner: null,
                            attribute: null
                        }
                    ]);
                }
            }
            res.end();
        };
        const _listener2 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (code === 1000001) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            name: '流通制御組織',
                            _code: {
                                _value: 1000001,
                                _ver: 1
                            },
                            inherit: {
                                _value: 50,
                                _ver: 1
                            },
                            description: '流通制御組織の定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000001,
                                _ver: 1
                            },
                            'app-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの認定基準',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの監査手順',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            category: null,
                            'consumer-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの認定基準',
                                        content: {
                                            sentence: 'データコンシューマーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの監査手順',
                                        content: {
                                            sentence: 'データコンシューマーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'data-trader-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'identification-set': [
                                {
                                    element: {
                                        _value: 30001,
                                        _ver: 1
                                    }
                                }
                            ],
                            'main-block': {
                                _value: 1000110,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-root-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: {
                                        title: '事業概要',
                                        content: {
                                            sentence: 'データ取引組織の事業概要です。'
                                        }
                                    }
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: null,
                                    at: '20200101T000000.000+0900'
                                }
                            ],
                            'store-distribution-ratio': null,
                            'supply-distribution-ratio': null,
                            'wf-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの認定基準',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの監査手順',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            }
                        },
                        prop: [
                            {
                                key: 'app-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'アプリケーションプロバイダー認定'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: [
                                            'catalog/ext/test-org/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/model/category/share/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'consumer-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データコンシューマー認定'
                            },
                            {
                                key: 'data-trader-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データ取引サービスプロバイダー認定'
                            },
                            {
                                key: 'identification-set',
                                type: {
                                    of: 'inner[]',
                                    inner: 'Identification'
                                },
                                description: '採用した本人性確認事項の組み合わせ'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-root-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: '領域運営サービスプロバイダー認定'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '61',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus'
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'store-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '蓄積分配比率'
                            },
                            {
                                key: 'supply-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '提供分配比率'
                            },
                            {
                                key: 'wf-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'ワークフロープロバイダー認定'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000002) {
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            name: '流通制御組織',
                            _code: {
                                _value: 1000002,
                                _ver: 1
                            },
                            inherit: {
                                _value: 50,
                                _ver: 1
                            },
                            description: '流通制御組織の定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000002,
                                _ver: 1
                            },
                            'app-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの認定基準',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'アプリケーションプロバイダーの監査手順',
                                        content: {
                                            sentence: 'アプリケーションプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            category: null,
                            'consumer-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの認定基準',
                                        content: {
                                            sentence: 'データコンシューマーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データコンシューマーの監査手順',
                                        content: {
                                            sentence: 'データコンシューマーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'data-trader-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'データ取引サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: 'データ取引サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            'identification-set': [
                                {
                                    element: {
                                        _value: 30001,
                                        _ver: 1
                                    }
                                }
                            ],
                            'main-block': {
                                _value: 1000110,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-root-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの認定基準',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: '領域運営サービスプロバイダーの監査手順',
                                        content: {
                                            sentence: '領域運営サービスプロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            },
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: {
                                        title: '事業概要',
                                        content: {
                                            sentence: 'データ取引組織の事業概要です。'
                                        }
                                    }
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: null,
                                    at: '20200101T000000.000+0900'
                                }
                            ],
                            'store-distribution-ratio': null,
                            'supply-distribution-ratio': null,
                            'wf-cert': {
                                cert: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの認定基準',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの認定基準です。'
                                        }
                                    }
                                },
                                audit: {
                                    key: 'title',
                                    value: '',
                                    section: {
                                        title: 'ワークフロープロバイダーの監査手順',
                                        content: {
                                            sentence: 'ワークフロープロバイダーの監査手順です。'
                                        }
                                    }
                                }
                            }
                        },
                        prop: [
                            {
                                key: 'app-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'アプリケーションプロバイダー認定'
                            },
                            {
                                key: 'category',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: [
                                            'catalog/ext/test-org/category/supply/actor',
                                            'catalog/built_in/category/supply/actor',
                                            'catalog/model/category/supply/actor',
                                            'catalog/ext/test-org/category/share/actor',
                                            'catalog/built_in/category/share/actor',
                                            'catalog/model/category/share/actor'
                                        ],
                                        _code: null,
                                        base: null
                                    }
                                },
                                description: null
                            },
                            {
                                key: 'consumer-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データコンシューマー認定'
                            },
                            {
                                key: 'data-trader-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'データ取引サービスプロバイダー認定'
                            },
                            {
                                key: 'identification-set',
                                type: {
                                    of: 'inner[]',
                                    inner: 'Identification'
                                },
                                description: '採用した本人性確認事項の組み合わせ'
                            },
                            {
                                key: 'main-block',
                                type: {
                                    of: 'code',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: 'アクター参加時に割り当てられたPXR-Block'
                            },
                            {
                                key: 'other-block',
                                type: {
                                    of: 'code[]',
                                    candidate: {
                                        ns: null,
                                        _code: null,
                                        base: {
                                            _value: '29',
                                            _ver: null
                                        }
                                    }
                                },
                                description: '他アクターから引き継いだPXR-Blockの配列'
                            },
                            {
                                key: 'region-root-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: '領域運営サービスプロバイダー認定'
                            },
                            {
                                key: 'statement',
                                type: {
                                    of: 'item[]',
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: '61',
                                                _ver: '1'
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '組織ステートメント'
                            },
                            {
                                key: 'status',
                                type: {
                                    of: 'inner[]',
                                    inner: 'CertStatus'
                                },
                                description: '認定の履歴'
                            },
                            {
                                key: 'store-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '蓄積分配比率'
                            },
                            {
                                key: 'supply-distribution-ratio',
                                type: {
                                    of: 'inner[]',
                                    inner: 'DistributionRatio'
                                },
                                description: '提供分配比率'
                            },
                            {
                                key: 'wf-cert',
                                type: {
                                    of: 'inner',
                                    inner: 'Certification'
                                },
                                description: 'ワークフロープロバイダー認定'
                            }
                        ],
                        attribute: null
                    });
                } else if (code === 1000009) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/platform/actor_1000001',
                                name: 'PF利用規約',
                                _code: {
                                    _value: 1000009,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 203,
                                    _ver: 1
                                },
                                description: 'PF利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000009,
                                    _ver: 1
                                },
                                'terms-of-use': {
                                    title: 'プラットフォーム利用規約',
                                    section: {
                                        title: '第1項',
                                        content: {
                                            sentence: '規約～～～'
                                        }
                                    }
                                },
                                're-consent-flag': true,
                                'period-of-re-consent': '2020-01-01T00:00:00',
                                'deleting-data-flag': true,
                                'returning-data-flag': true,
                                'period-of-release': '2020-01-01T00:00:00'
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000010) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/platform/actor_1000001',
                                name: 'PF利用規約',
                                _code: {
                                    _value: 1000010,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 203,
                                    _ver: 1
                                },
                                description: 'PF利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000010,
                                    _ver: 1
                                },
                                'terms-of-use': {
                                    title: 'プラットフォーム利用規約',
                                    section: {
                                        title: '第1項',
                                        content: {
                                            sentence: '規約～～～'
                                        }
                                    }
                                },
                                're-consent-flag': true,
                                'period-of-re-consent': null,
                                'deleting-data-flag': true,
                                'returning-data-flag': true,
                                'period-of-release': '2020-01-01T00:00:00'
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000109) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000001',
                                name: 'Region利用規約',
                                _code: {
                                    _value: 1000109,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 204,
                                    _ver: 1
                                },
                                description: 'Region利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000109,
                                    _ver: 1
                                },
                                'terms-of-use': {
                                    title: 'リージョン利用規約',
                                    section: {
                                        title: '第1項',
                                        content: {
                                            sentence: '規約～～～'
                                        }
                                    }
                                },
                                're-consent-flag': true,
                                'period-of-re-consent': '2020-01-01T00:00:00',
                                'deleting-data-flag': true,
                                'returning-data-flag': true,
                                'period-of-release': '2020-01-01T00:00:00'
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000110) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000002',
                                name: 'Region利用規約',
                                _code: {
                                    _value: 1000110,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 204,
                                    _ver: 1
                                },
                                description: 'Region利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000110,
                                    _ver: 1
                                },
                                'terms-of-use': {
                                    title: 'リージョン利用規約',
                                    section: {
                                        title: '第1項',
                                        content: {
                                            sentence: '規約～～～'
                                        }
                                    }
                                },
                                're-consent-flag': true,
                                'period-of-re-consent': null,
                                'deleting-data-flag': true,
                                'returning-data-flag': true,
                                'period-of-release': '2020-01-01T00:00:00'
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000119) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000001',
                                name: 'Region利用規約',
                                _code: {
                                    _value: 1000119,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 204,
                                    _ver: 1
                                },
                                description: 'Region利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000119,
                                    _ver: 1
                                },
                                'terms-of-use': {
                                    title: 'リージョン利用規約',
                                    section: {
                                        title: '第1項',
                                        content: {
                                            sentence: '規約～～～'
                                        }
                                    }
                                },
                                're-consent-flag': true,
                                'period-of-re-consent': '2020-01-01T00:00:00',
                                'deleting-data-flag': true,
                                'returning-data-flag': true,
                                'period-of-release': '2030-01-01T00:00:00'
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000111) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000002',
                                name: 'Region利用規約',
                                _code: {
                                    _value: 1000111,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 204,
                                    _ver: 1
                                },
                                description: 'Region利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000111,
                                    _ver: 1
                                },
                                'terms-of-use': {
                                    title: 'リージョン利用規約',
                                    section: {
                                        title: '第1項',
                                        content: {
                                            sentence: '規約～～～'
                                        }
                                    }
                                },
                                're-consent-flag': true,
                                'period-of-re-consent': '2020-01-01T00:00:00',
                                'deleting-data-flag': true,
                                'returning-data-flag': true,
                                'period-of-release': '2020-01-01T00:00:00'
                            },
                            prop: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000483) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000438/application',
                            name: 'test app',
                            description: 'test app',
                            _code: {
                                _value: 1000483,
                                _ver: 1
                            },
                            inherit: {
                                _value: 46,
                                _ver: 1
                            }
                        },
                        template: {
                            _code: {
                                _value: 1000483,
                                _ver: 4
                            },
                            'information-site': null,
                            'region-alliance': [
                                {
                                    _value: 1000209,
                                    _ver: 1
                                },
                                {
                                    _value: 1000452,
                                    _ver: 1
                                }
                            ],
                            share: [
                                {
                                    _value: 1000488,
                                    _ver: 1
                                }
                            ],
                            store: [
                                {
                                    _value: 1000491,
                                    _ver: 1
                                }
                            ]
                        },
                        inner: null,
                        attribute: null
                    });
                } else if (code === 1000482) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000438/application',
                            name: 'test app',
                            description: 'test app',
                            _code: {
                                _value: 1000482,
                                _ver: 1
                            },
                            inherit: {
                                _value: 46,
                                _ver: 1
                            }
                        },
                        template: {
                            _code: {
                                _value: 1000482,
                                _ver: 16
                            },
                            'information-site': null,
                            'region-alliance': [
                                {
                                    _value: 1000209,
                                    _ver: 1
                                },
                                {
                                    _value: 1000451,
                                    _ver: 1
                                }
                            ],
                            share: [
                                {
                                    _value: 1000487,
                                    _ver: 1
                                }
                            ],
                            store: [
                                {
                                    _value: 1000490,
                                    _ver: 1
                                }
                            ]
                        },
                        inner: null,
                        attribute: null
                    });
                } else if (code === 1000461) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/application',
                            name: '高齢者向け健康サポートアプリ',
                            description: 'aaa地区にお住いの高齢者のための健康サポートアプリです。',
                            _code: {
                                _value: 1000461,
                                _ver: 1
                            },
                            inherit: {
                                _value: 41,
                                _ver: 1
                            }
                        },
                        template: {
                            _code: {
                                _value: 1000461,
                                _ver: 26
                            },
                            'information-site': null,
                            redirect_url: 'testUrl',
                            'region-alliance': [
                                {
                                    _value: 1000209,
                                    _ver: 1
                                },
                                {
                                    _value: 1000451,
                                    _ver: 1
                                }
                            ],
                            share: [
                                {
                                    _value: 1000463,
                                    _ver: 1
                                },
                                {
                                    _value: 1000464,
                                    _ver: 1
                                }
                            ],
                            store: [
                                {
                                    _value: 1000467,
                                    _ver: 3
                                }
                            ]
                        },
                        inner: null,
                        attribute: null
                    });
                } else if (code === 1000462) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app/actor_1000436/application',
                            name: '高齢者向け健康サポートアプリ',
                            description: 'aaa地区にお住いの高齢者のための健康サポートアプリです。',
                            _code: {
                                _value: 1000462,
                                _ver: null
                            },
                            inherit: {
                                _value: 41,
                                _ver: null
                            }
                        },
                        template: {
                            _code: {
                                _value: 1000462,
                                _ver: 11
                            },
                            'information-site': null,
                            redirect_url: 'https://example.net',
                            'region-alliance': [
                                {
                                    _value: 1000209,
                                    _ver: 1
                                },
                                {
                                    _value: 1000453,
                                    _ver: 1
                                }
                            ],
                            share: [
                                {
                                    _value: 1000465,
                                    _ver: 1
                                },
                                {
                                    _value: 1000466,
                                    _ver: 1
                                }
                            ],
                            store: [
                                {
                                    _value: 1000468,
                                    _ver: 1
                                }
                            ]
                        },
                        inner: null,
                        attribute: null
                    });
                } else if (code === 1000451) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                            name: '高齢者向け健康サポート',
                            _code: {
                                _value: 1000451,
                                _ver: 19
                            },
                            inherit: {
                                _value: 48,
                                _ver: 1
                            },
                            description: '高齢者向け健康サポートの定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000451,
                                _ver: 19
                            },
                            'app-alliance': [
                                {
                                    _value: 1000461,
                                    _ver: 13
                                },
                                {
                                    _value: 1000462,
                                    _ver: 7
                                },
                                {
                                    _value: 1000471,
                                    _ver: 7
                                },
                                {
                                    _value: 1001618,
                                    _ver: 1
                                },
                                {
                                    _value: 1001620,
                                    _ver: 1
                                },
                                {
                                    _value: 1001649,
                                    _ver: 1
                                },
                                {
                                    _value: 1000461,
                                    _ver: 3
                                },
                                {
                                    _value: 1001633,
                                    _ver: 1
                                },
                                {
                                    _value: 1001847,
                                    _ver: 2
                                }
                            ],
                            status: 'open',
                            'terms-of-use': {
                                _value: 1001015,
                                _ver: 3
                            },
                            'wf-alliance': [
                                {
                                    _value: 1000481,
                                    _ver: 36
                                },
                                {
                                    _value: 1000482,
                                    _ver: 14
                                },
                                {
                                    _value: 1000483,
                                    _ver: 2
                                },
                                {
                                    _value: 1001630,
                                    _ver: 1
                                },
                                {
                                    _value: 1001924,
                                    _ver: 3
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1001015) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000001',
                                name: 'region10利用規約',
                                _code: {
                                    _value: 1001015,
                                    _ver: 3
                                },
                                inherit: {
                                    _value: 204,
                                    _ver: 1
                                },
                                description: 'region10の利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1001015,
                                    _ver: 3
                                },
                                'deleting-data-flag': true,
                                'period-of-re-consent': '2020-01-01T00:00:00',
                                'period-of-release': '2020-01-01T00:00:00',
                                're-consent-flag': true,
                                'returning-data-flag': true,
                                'terms-of-use': [
                                    {
                                        title: 'Region利用規約',
                                        section: [
                                            {
                                                title: '領域運営test new10-3',
                                                content: [
                                                    {
                                                        sentence: '領域運営test new10-3'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            prop: null,
                            value: null,
                            attribute: null
                        }
                    );
                } else if (code === 1000452) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000001/region',
                            name: 'test region',
                            _code: {
                                _value: 1000452,
                                _ver: 19
                            },
                            inherit: {
                                _value: 48,
                                _ver: 1
                            },
                            description: 'test regionの定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000452,
                                _ver: 19
                            },
                            'app-alliance': [
                                {
                                    _value: 1000461,
                                    _ver: 13
                                },
                                {
                                    _value: 1000462,
                                    _ver: 7
                                },
                                {
                                    _value: 1000471,
                                    _ver: 7
                                },
                                {
                                    _value: 1001618,
                                    _ver: 1
                                },
                                {
                                    _value: 1001620,
                                    _ver: 1
                                },
                                {
                                    _value: 1001649,
                                    _ver: 1
                                },
                                {
                                    _value: 1000461,
                                    _ver: 3
                                },
                                {
                                    _value: 1001633,
                                    _ver: 1
                                },
                                {
                                    _value: 1001847,
                                    _ver: 2
                                }
                            ],
                            status: 'open',
                            'terms-of-use': {
                                _value: 1001016,
                                _ver: 1
                            },
                            'wf-alliance': [
                                {
                                    _value: 1000481,
                                    _ver: 36
                                },
                                {
                                    _value: 1000482,
                                    _ver: 14
                                },
                                {
                                    _value: 1000483,
                                    _ver: 2
                                },
                                {
                                    _value: 1001630,
                                    _ver: 1
                                },
                                {
                                    _value: 1001924,
                                    _ver: 3
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1001016) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000001',
                                name: 'region 利用規約',
                                _code: {
                                    _value: 1001016,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 204,
                                    _ver: 1
                                },
                                description: 'regionの利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1001015,
                                    _ver: 3
                                },
                                'deleting-data-flag': true,
                                'period-of-re-consent': '2020-01-01T00:00:00',
                                'period-of-release': '2999-01-01T00:00:00',
                                're-consent-flag': true,
                                'returning-data-flag': true,
                                'terms-of-use': [
                                    {
                                        title: 'Region利用規約',
                                        section: [
                                            {
                                                title: '領域運営test new10-3',
                                                content: [
                                                    {
                                                        sentence: '領域運営test new10-3'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            prop: null,
                            value: null,
                            attribute: null
                        }
                    );
                } else if (code === 1001017) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000002',
                                name: 'region 利用規約',
                                _code: {
                                    _value: 1001017,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 204,
                                    _ver: 1
                                },
                                description: 'regionの利用規約です。'
                            },
                            template: {
                                _code: {
                                    _value: 1001017,
                                    _ver: 1
                                },
                                'deleting-data-flag': true,
                                'period-of-re-consent': '2020-01-01T00:00:00',
                                'period-of-release': '2020-01-01T00:00:00',
                                're-consent-flag': true,
                                'returning-data-flag': true,
                                'terms-of-use': [
                                    {
                                        title: 'Region利用規約',
                                        section: [
                                            {
                                                title: '領域運営test new10-3',
                                                content: [
                                                    {
                                                        sentence: '領域運営test new10-3'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            prop: null,
                            value: null,
                            attribute: null
                        }
                    );
                }
            }
            res.status(status).end();
        };
        this._app = express();
        this._app.get('/catalog/name', _listener);
        this._app.get('/catalog/:code', _listener2);
        this._app.get('/catalog/:code/:version', _listener2);
        this._app.get('/catalog', _listener1);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerTermsOfUse {
    _app: express.Express;
    _server: Server;
    constructor (status: number, kind: number) {
        this._app = express();
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (kind === 0) {
                    if (code === 1001007) {
                        // platform利用規約
                        res.status(ResponseCode.OK).json({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/platform'
                            },
                            template: {
                                _code: {
                                    _value: '1000001',
                                    _ver: '1'
                                },
                                'period-of-re-consent': '2023-01-01T00:00:00.000+0900'
                            }
                        });
                    } else if (code === 1001008) {
                        // region利用規約
                        res.status(ResponseCode.OK).json({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000432'
                            },
                            template: {
                                _code: {
                                    _value: '1000001',
                                    _ver: '1'
                                },
                                'period-of-re-consent': '2023-01-01T00:00:00.000+0900'
                            }
                        });
                    }
                } else if (kind === 1) {
                    // 期限切れ
                    if (code === 1001007) {
                        // platform利用規約
                        res.status(ResponseCode.OK).json({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/platform'
                            },
                            template: {
                                'period-of-re-consent': '2020-01-01T00:00:00.000+0900'
                            }
                        });
                    } else if (code === 1001008) {
                        // region利用規約
                        res.status(ResponseCode.OK).json({
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000432'
                            },
                            template: {
                                'period-of-re-consent': '2020-01-01T00:00:00.000+0900'
                            }
                        });
                    }
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.status(status).json({
                    ext_name: 'aaa-healthcare-consortium'
                });
            } else {
                res.status(status);
            }
            res.end();
        };

        const _listener3 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.status(status).json([{
                    catalogItem: {
                        _code: {
                            _value: 1000020,
                            _ver: 1
                        }
                    },
                    template: {
                        'terms-of-use': {
                            _value: 1001008,
                            _ver: 4
                        },
                        presigned_url_expiration: {
                            value: 30
                        }
                    }
                }]);
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/name', _listener2);
        this._app.get('/catalog/', _listener3);
        this._app.get('/catalog/:code/:version', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerPrepare {
    _app: express.Express;
    _server: Server;
    constructor (status: number, nsNum: number, catalogNum: number, returningFlag: number = 1, deletingFlag: number = 1) {
        this._app = express();

        // イベントハンドラー
        const _listenerRegion = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                res.status(200);
                // アクター確認
                if (code === 1000002) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            ext_name: 'test-org',
                            name: 'test-org',
                            _code: {
                                _value: 1000002,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000006,
                                _ver: 1
                            },
                            'app-alliance': [
                                {
                                    _value: 1000003,
                                    _ver: 1
                                },
                                {
                                    _value: 1000013,
                                    _ver: 1
                                },
                                {
                                    _value: 1000023,
                                    _ver: 1
                                }
                            ],
                            'wf-alliance': null

                        }
                    });
                } else if (code === 1000005) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            ext_name: 'test-org',
                            name: 'test-org',
                            _code: {
                                _value: 1000002,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000006,
                                _ver: 1
                            },
                            'app-alliance': [
                                {
                                    _value: 1000003,
                                    _ver: 1
                                },
                                {
                                    _value: 1000013,
                                    _ver: 1
                                },
                                {
                                    _value: 1000023,
                                    _ver: 1
                                }
                            ],
                            'wf-alliance': [
                                {
                                    _value: 1000004,
                                    _ver: 1
                                },
                                {
                                    _value: 1000014,
                                    _ver: 1
                                }
                            ]

                        }
                    });
                } else if (code === 1000012) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            ext_name: 'test-org',
                            name: 'test-org',
                            _code: {
                                _value: 1000012,
                                _ver: 1
                            }
                        },
                        template: {
                            'terms-of-use': {
                                _value: 1000006,
                                _ver: 1
                            },
                            'app-alliance': null,
                            'wf-alliance': null
                        }
                    });
                } else if (code === 1000006) {
                    // リージョン利用規約
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/test-org/actor/pxr-root',
                            ext_name: 'test-org',
                            name: 'test-org',
                            _code: {
                                _value: 1000006,
                                _ver: 1
                            }
                        },
                        template: {
                            'returning-data-flag': 1,
                            'deleting-data-flag': 1
                        }
                    });
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        const _listenerAppWf = (req: express.Request, res: express.Response) => {
            if (status === 200) {
                res.status(200);
                const catalogs: {}[] = [];
                for (const appWfCode of req.body) {
                    if (appWfCode._code._value === 1000003) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                ext_name: 'test-org',
                                name: 'app1',
                                _code: {
                                    _value: 1000003,
                                    _ver: 1
                                }
                            },
                            template: {
                                'region-alliance': [
                                    // == req.region._value
                                    {
                                        _value: 1000002,
                                        _ver: 1
                                    }
                                ]
                            }
                        });
                    } else if (appWfCode._code._value === 1000013) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                ext_name: 'test-org',
                                name: 'app2',
                                _code: {
                                    _value: 1000013,
                                    _ver: 1
                                }
                            },
                            template: {
                                'region-alliance': [
                                    // !== req.region._value、user-id-cooperateに該当コードなし
                                    {
                                        _value: 1000012,
                                        _ver: 1
                                    }
                                ]
                            }
                        });
                    } else if (appWfCode._code._value === 1000023) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                ext_name: 'test-org',
                                name: 'app2',
                                _code: {
                                    _value: 1000013,
                                    _ver: 1
                                }
                            },
                            template: {
                                'region-alliance': null
                            }
                        });
                    } else if (appWfCode._code._value === 1000004) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                ext_name: 'test-org',
                                name: 'wf1',
                                _code: {
                                    _value: 1000004,
                                    _ver: 1
                                }
                            },
                            template: {
                                'region-alliance': [
                                    // !== req.region._value、user-id-cooperateに該当コードあり
                                    {
                                        _value: 1000032,
                                        _ver: 1
                                    }
                                ]
                            }
                        });
                    } else if (appWfCode._code._value === 1000014) {
                        catalogs.push({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                ext_name: 'test-org',
                                name: 'wf2',
                                _code: {
                                    _value: 1000014,
                                    _ver: 1
                                }
                            },
                            template: {
                                'region-alliance': [
                                    // !== req.region._value、user-id-cooperateに該当コードなし
                                    {
                                        _value: 1000042,
                                        _ver: 1
                                    }
                                ]
                            }
                        });
                    }
                }
                res.status(200).json(catalogs);
            } else {
                res.status(status);
            }
            res.end();
        };

        const _extName = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (nsNum === 0) {
                    res.json({
                        ext_name: 'test-org'
                    });
                } else {
                    res.json({
                        ext_name: 'dummy'
                    });
                }
            }
            res.status(status).end();
        };

        const _pxrRootCatalog = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.status(200);
                const ns = req.query['ns'];
                if (ns === 'catalog/ext/test-org/terms-of-use/platform') {
                    if (catalogNum === 0) {
                        // リージョン利用規約
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                ext_name: 'test-org',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                'returning-data-flag': returningFlag,
                                'deleting-data-flag': deletingFlag
                            }
                        }]);
                    } else if (catalogNum === 1) {
                        // 異常：catalogItemが存在しない
                        res.json([{
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 2) {
                        // 異常：catalogItem.nsがnull
                        res.json([{
                            catalogItem: {
                                ns: null,
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 3) {
                        // 異常：catalogItem._codeが存在しない
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org'
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 4) {
                        // 異常：catalogItem._code._valueが存在しない
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 5) {
                        // 異常：catalogItem._code._valueが数値以外
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 'dummy',
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 6) {
                        // 異常：catalogItem._code._verが存在しない
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 7) {
                        // 異常：catalogItem._code._verが数値以外
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 'dummy'
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            }
                        }]);
                    } else if (catalogNum === 8) {
                        // 異常：pxr-rootカタログ取得、1件より多い
                        res.json([
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/test-org/actor/pxr-root',
                                    name: 'test-org',
                                    _code: {
                                        _value: 1000006,
                                        _ver: 1
                                    }
                                },
                                template: {
                                    workflow: [{
                                        _value: 1000004,
                                        _ver: 1
                                    }],
                                    application: [],
                                    'main-block': {
                                        _value: 1000006,
                                        _ver: 1
                                    }
                                }
                            },
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/test-org/actor/pxr-root',
                                    name: 'test-org',
                                    _code: {
                                        _value: 1000006,
                                        _ver: 2
                                    }
                                },
                                template: {
                                    workflow: [{
                                        _value: 1000004,
                                        _ver: 1
                                    }],
                                    application: [],
                                    'main-block': {
                                        _value: 1000006,
                                        _ver: 1
                                    }
                                }
                            }
                        ]);
                    } else if (catalogNum === 9) {
                        // 異常：pxr-rootカタログ取得、0件
                        res.json([]);
                    } else if (catalogNum === 10) {
                        // 異常：UPDATEエラー
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                workflow: [{
                                    _value: 1000004,
                                    _ver: 1
                                }],
                                application: [],
                                'main-block': {
                                    _value: 'dummy',
                                    _ver: 1
                                }
                            }
                        }]);
                    }
                } else {
                    res.json({ ns: ns });
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.use(bodyParser.json());
        this._app.get('/catalog/name', _extName);
        this._app.get('/catalog/:code/:version', _listenerRegion);
        this._app.get('/catalog/:code', _listenerRegion);
        this._app.get('/catalog', _pxrRootCatalog);
        this._app.post('/catalog', _listenerAppWf);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerDelete {
    _app: express.Express;
    _server: Server;
    constructor (status: number, nsNum: number, catalogNum: number, type: string = 'day') {
        this._app = express();

        // イベントハンドラー
        const _listenerActor = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                res.status(200);
                // アクター確認
                if (catalogNum === 0) {
                    if (code === 1000001) {
                        res.json({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/pxr-root',
                                ext_name: 'test-org',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {}
                        });
                    }
                } else if (catalogNum === 1) {
                    if (code === 1000001) {
                        // 異常：pxr-rootカタログのns不正
                        res.json({
                            catalogItem: {
                                ns: 'catalog/ext/test-org/actor/',
                                ext_name: 'test-org',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {}
                        });
                    }
                } else {
                    console.log('コードによるアクターカタログの取得に失敗しています');
                    res.status(500).end();
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        const _extName = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (nsNum === 0) {
                    res.json({
                        ext_name: 'test-org'
                    });
                } else {
                    res.json({
                        ext_name: 'dummy'
                    });
                }
            }
            res.status(status).end();
        };

        const _globalSettingCatalog = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.status(200);
                const ns = req.query['ns'];
                if (ns === 'catalog/ext/test-org/setting/global') {
                    if (catalogNum === 0) {
                        // グローバル設定カタログ
                        res.json([{
                            catalogItem: {
                                ns: 'catalog/ext/test-org/setting/global',
                                ext_name: 'test-org',
                                name: 'test-org',
                                _code: {
                                    _value: 1000006,
                                    _ver: 1
                                }
                            },
                            template: {
                                book_deletion_pending_term: {
                                    // Book削除保留日数
                                    value: 10,
                                    type: type
                                }
                            }
                        }]);
                    } else if (catalogNum === 1) {
                        // 異常：catalogItemが存在しない
                        res.json([{
                            template: {
                                book_deletion_pending_term: {
                                    velue: 10,
                                    type: type
                                }
                            }
                        }]);
                    } else {
                        res.json({ ns: ns });
                    }
                } else {
                    res.json({ ns: ns });
                }
            } else {
                res.status(status);
            }
            res.end();
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.use(bodyParser.json());
        this._app.get('/catalog/name', _extName);
        this._app.get('/catalog/:code/:version', _listenerActor);
        this._app.get('/catalog/:code', _listenerActor);
        this._app.get('/catalog', _globalSettingCatalog);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerOutputMcdData {
    _app: express.Express;
    _server: Server;

    constructor (status: number, type: number) {
        this._app = express();
        const APP = 0;
        const WF = 1;
        const REGION = 2;

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (code === 1000001) {
                    if (type === WF) {
                        res.status(status).json(
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/test-org/actor/wf',
                                    name: 'テスト用アクターカタログ（WF）',
                                    _code: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 47,
                                        _ver: 1
                                    },
                                    description: 'テスト用アクターカタログ（WF）'
                                },
                                template: {
                                    _code: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    'breakaway-flg': false,
                                    category: null,
                                    'information-site': '',
                                    'main-block': {
                                        _value: 1000112,
                                        _ver: 1
                                    },
                                    'other-block': null,
                                    'region-alliance': [
                                        {
                                            _value: 1000003,
                                            _ver: 1
                                        }
                                    ],
                                    statement: [
                                        {
                                            title: '組織ステートメント',
                                            section: [
                                                {
                                                    title: 'ご挨拶',
                                                    content: [
                                                        {
                                                            sentence: 'テスト用ワークフローの組織ステートメントです。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    status: [
                                        {
                                            status: 'certified',
                                            by: {
                                                _value: 1000001,
                                                _ver: 1
                                            },
                                            at: '2020-01-01T00:00:00.000+0900'
                                        }
                                    ],
                                    workflow: [
                                        {
                                            _value: 1000004,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: null,
                                attribute: null
                            }
                        );
                    } else if (type === APP) {
                        res.status(status).json(
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/test-org/actor/app',
                                    name: 'テスト用アクターカタログ（APP）',
                                    _code: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 42,
                                        _ver: 1
                                    },
                                    description: 'テスト用アクターカタログ（APP）'
                                },
                                template: {
                                    _code: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    'breakaway-flg': false,
                                    category: null,
                                    'information-site': '',
                                    'main-block': {
                                        _value: 1000112,
                                        _ver: 1
                                    },
                                    'other-block': null,
                                    'region-alliance': [
                                        {
                                            _value: 1000003,
                                            _ver: 1
                                        }
                                    ],
                                    statement: [
                                        {
                                            title: '組織ステートメント',
                                            section: [
                                                {
                                                    title: 'ご挨拶',
                                                    content: [
                                                        {
                                                            sentence: 'テスト用アプリケーションの組織ステートメントです。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    status: [
                                        {
                                            status: 'certified',
                                            by: {
                                                _value: 1000001,
                                                _ver: 1
                                            },
                                            at: '2020-01-01T00:00:00.000+0900'
                                        }
                                    ],
                                    application: [
                                        {
                                            _value: 1000004,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: null,
                                attribute: null
                            }
                        );
                    } else if (type === REGION) {
                        res.status(status).json(
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/test-org/actor/region-root',
                                    name: 'テスト用アクターカタログ（REGION）',
                                    _code: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 42,
                                        _ver: 1
                                    },
                                    description: 'テスト用アクターカタログ（REGION）'
                                },
                                template: {
                                    _code: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    'breakaway-flg': false,
                                    category: null,
                                    'information-site': '',
                                    'main-block': {
                                        _value: 1000112,
                                        _ver: 1
                                    },
                                    'other-block': null,
                                    'region-alliance': [
                                        {
                                            _value: 1000003,
                                            _ver: 1
                                        }
                                    ],
                                    statement: [
                                        {
                                            title: '組織ステートメント',
                                            section: [
                                                {
                                                    title: 'ご挨拶',
                                                    content: [
                                                        {
                                                            sentence: 'テスト用リージョンの組織ステートメントです。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    status: [
                                        {
                                            status: 'certified',
                                            by: {
                                                _value: 1000001,
                                                _ver: 1
                                            },
                                            at: '2020-01-01T00:00:00.000+0900'
                                        }
                                    ],
                                    region: [
                                        {
                                            _value: 1000005,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: null,
                                attribute: null
                            }
                        );
                    }
                }
                return;
            }
            res.status(status).end();
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/:code', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerRegionClose {
    _app: express.Express;
    _server: Server;
    constructor (code: number, status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                if (code === 1000001) {
                    // 正常
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                            name: '高齢者向け健康サポート',
                            description: '高齢者向け健康サポートのリージョンの定義です。',
                            _code: {
                                _value: 1000451,
                                _ver: null
                            },
                            inherit: {
                                _value: 48,
                                _ver: null
                            }
                        },
                        template: {
                            prop: null,
                            value: [
                                {
                                    key: 'statement',
                                    value: [
                                        {
                                            key: 'title',
                                            value: 'リージョンステートメント'
                                        },
                                        {
                                            key: 'section',
                                            value: [
                                                {
                                                    key: 'title',
                                                    value: 'ステートメント'
                                                },
                                                {
                                                    key: 'content',
                                                    value: [
                                                        {
                                                            key: 'sentence',
                                                            value: '高齢者が医療・健康サービスを簡単に受けられるようにサポートするアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000461
                                        },
                                        {
                                            key: '_ver',
                                            value: 13
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000462
                                        },
                                        {
                                            key: '_ver',
                                            value: 7
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000471
                                        },
                                        {
                                            key: '_ver',
                                            value: 7
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000481
                                        },
                                        {
                                            key: '_ver',
                                            value: 36
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000482
                                        },
                                        {
                                            key: '_ver',
                                            value: 14
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000483
                                        },
                                        {
                                            key: '_ver',
                                            value: 2
                                        }
                                    ]
                                },
                                {
                                    key: 'status',
                                    value: 'close'
                                },
                                {
                                    key: 'terms-of-use',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000391
                                        },
                                        {
                                            key: '_ver',
                                            value: 1
                                        }
                                    ]
                                }
                            ]
                        },
                        inner: null,
                        attribute: null
                    });
                } else if (code === 1000002) {
                    // 異常：statusが'close'以外
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                            name: '高齢者向け健康サポート',
                            description: '高齢者向け健康サポートのリージョンの定義です。',
                            _code: {
                                _value: 1000451,
                                _ver: null
                            },
                            inherit: {
                                _value: 48,
                                _ver: null
                            }
                        },
                        template: {
                            prop: null,
                            value: [
                                {
                                    key: 'statement',
                                    value: [
                                        {
                                            key: 'title',
                                            value: 'リージョンステートメント'
                                        },
                                        {
                                            key: 'section',
                                            value: [
                                                {
                                                    key: 'title',
                                                    value: 'ステートメント'
                                                },
                                                {
                                                    key: 'content',
                                                    value: [
                                                        {
                                                            key: 'sentence',
                                                            value: '高齢者が医療・健康サービスを簡単に受けられるようにサポートするアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000461
                                        },
                                        {
                                            key: '_ver',
                                            value: 13
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000462
                                        },
                                        {
                                            key: '_ver',
                                            value: 7
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000471
                                        },
                                        {
                                            key: '_ver',
                                            value: 7
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000481
                                        },
                                        {
                                            key: '_ver',
                                            value: 36
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000482
                                        },
                                        {
                                            key: '_ver',
                                            value: 14
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000483
                                        },
                                        {
                                            key: '_ver',
                                            value: 2
                                        }
                                    ]
                                },
                                {
                                    key: 'status',
                                    value: 'open'
                                },
                                {
                                    key: 'terms-of-use',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000391
                                        },
                                        {
                                            key: '_ver',
                                            value: 1
                                        }
                                    ]
                                }
                            ]
                        },
                        inner: null,
                        attribute: null
                    });
                } else if (code === 1000003) {
                    // 異常：catalogitem.value[n]にkey:statusを持つ要素が無い
                    res.status(ResponseCode.OK).json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                            name: '高齢者向け健康サポート',
                            description: '高齢者向け健康サポートのリージョンの定義です。',
                            _code: {
                                _value: 1000451,
                                _ver: null
                            },
                            inherit: {
                                _value: 48,
                                _ver: null
                            }
                        },
                        template: {
                            prop: null,
                            value: [
                                {
                                    key: 'statement',
                                    value: [
                                        {
                                            key: 'title',
                                            value: 'リージョンステートメント'
                                        },
                                        {
                                            key: 'section',
                                            value: [
                                                {
                                                    key: 'title',
                                                    value: 'ステートメント'
                                                },
                                                {
                                                    key: 'content',
                                                    value: [
                                                        {
                                                            key: 'sentence',
                                                            value: '高齢者が医療・健康サービスを簡単に受けられるようにサポートするアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000461
                                        },
                                        {
                                            key: '_ver',
                                            value: 13
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000462
                                        },
                                        {
                                            key: '_ver',
                                            value: 7
                                        }
                                    ]
                                },
                                {
                                    key: 'app-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000471
                                        },
                                        {
                                            key: '_ver',
                                            value: 7
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000481
                                        },
                                        {
                                            key: '_ver',
                                            value: 36
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000482
                                        },
                                        {
                                            key: '_ver',
                                            value: 14
                                        }
                                    ]
                                },
                                {
                                    key: 'wf-alliance',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000483
                                        },
                                        {
                                            key: '_ver',
                                            value: 2
                                        }
                                    ]
                                },
                                {
                                    key: 'terms-of-use',
                                    value: [
                                        {
                                            key: '_value',
                                            value: 1000391
                                        },
                                        {
                                            key: '_ver',
                                            value: 1
                                        }
                                    ]
                                }
                            ]
                        },
                        inner: null,
                        attribute: null
                    });
                }
                return;
            }
            res.status(status).end();
        };
        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.get('/catalog/:code', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerBookForceDelete {
    _app: express.Express;
    _server: Server;
    constructor (status: number, idServiceFlg: boolean) {
        this._app = express();

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const ns = req.query['ns'];
            res.status(status);
            if (ns === 'catalog/ext/aaa-healthcare-consortium/setting/global') {
                res.json([
                    {
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/setting/global',
                            name: 'PXR：グローバル設定',
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            inherit: {
                                _value: 160,
                                _ver: 1
                            },
                            description: 'PXR全体のグローバル設定の定義です。'
                        },
                        template: {
                            _code: {
                                _value: 1000374,
                                _ver: 1
                            },
                            'account-lock-count': 6,
                            'account-lock-release-time': {
                                type: 'minute',
                                value: 30
                            },
                            'app-p-name': 'アプリケーションプロバイダー',
                            'book-name': 'ヘルスケアNOTE',
                            'book-open-code-expiration': {
                                type: 'minute',
                                value: 10
                            },
                            'book-open-notification-interval': {
                                type: 'day',
                                value: 1
                            },
                            book_create_sms_message: '%s?ID=%s パスワード: %s',
                            'catalog-name': 'PXRカタログ',
                            'coin-name': 'PXRコイン',
                            'data-consumer-name': 'データコンシューマー',
                            'data-trader-name': 'データ取引サービスプロバイダー',
                            help_contact: {
                                title: 'ヘルプ・問い合わせ',
                                section: [
                                    {
                                        title: 'ヘルプ・問い合わせ',
                                        content: [
                                            {
                                                sentence: 'ヘルプ・問い合わせです。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'identity-verification-expiration': {
                                type: 'day',
                                value: 7
                            },
                            login_sms_message: 'PXRポータルのワンタイムログインコードは %s です。',
                            management_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            management_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_initial_login_description: {
                                title: '初回ログインURL通知文書説明',
                                section: [
                                    {
                                        title: '初回ログインURL通知文書説明',
                                        content: [
                                            {
                                                sentence: '初回ログインURL通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            management_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            management_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            management_password_similarity_check: true,
                            onboarding_start: {
                                title: 'Onboarding',
                                section: [
                                    {
                                        title: 'PXRエコシステムとは',
                                        content: [
                                            {
                                                sentence: 'PXRエコシステム説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            onboarding_store: {
                                title: 'データ蓄積設定',
                                section: [
                                    {
                                        title: 'データ蓄積設定',
                                        content: [
                                            {
                                                sentence: 'データ蓄積設定説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'one-time-login-code-expiration': null,
                            open_book_automatically: true,
                            'password-expiration': {
                                type: 'day',
                                value: 90
                            },
                            'password-generations-number': 4,
                            personal_account_delete: false,
                            personal_account_delete_ng_message: 'アカウント削除をご希望の場合はお問合せ下さい。',
                            personal_disassociation: true,
                            personal_initial_login_description: {
                                title: 'Book開設時のQRコード通知文書説明',
                                section: [
                                    {
                                        title: 'Book開設時のQRコード通知文書説明',
                                        content: [
                                            {
                                                sentence: 'Book開設時のQRコード通知文書説明'
                                            }
                                        ]
                                    }
                                ]
                            },
                            personal_share_basic_policy: false,
                            'personal_two-step_verification': true,
                            'portal-name': 'My PXR',
                            'pxr-root-name': '流通制御サービスプロバイダー',
                            pxr_id_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                            pxr_id_format_errormessage: '8桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_format: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{12,}$',
                            pxr_id_password_format_errormessage: '12桁以上かつアルファベットと数字混在で入力して下さい。',
                            pxr_id_password_similarity_check: true,
                            pxr_id_prefix: '',
                            pxr_id_suffix: '',
                            'region-root-name': '領域運営サービスプロバイダー',
                            'region-tou_re-consent_notification_interval': {
                                value: 7,
                                type: 'days'
                            },
                            search_target_ns: [
                                {
                                    name: 'データカテゴリ',
                                    ns: 'catalog/ext/aaa-healthcare-consortium/attribute/category/data'
                                }
                            ],
                            'service-name': 'サービス',
                            service_category_for_data_category: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    dataCategory: [
                                        {
                                            _value: 1000137,
                                            _ver: 1
                                        }
                                    ]
                                }
                            ],
                            service_category_for_workflow: [
                                {
                                    service: {
                                        _value: 1000065,
                                        _ver: 1
                                    },
                                    workflow_p: {
                                        _value: 1000438,
                                        _ver: 1
                                    },
                                    workflow: {
                                        _value: 1000481,
                                        _ver: 1
                                    }
                                }
                            ],
                            'session-expiration': {
                                type: 'hour',
                                value: 3
                            },
                            'system-name': 'aaaデジタルヘルスプラットフォーム',
                            terms_of_service: {
                                title: '利用規約',
                                section: [
                                    {
                                        title: '利用規約',
                                        content: [
                                            {
                                                sentence: '利用規約です。'
                                            }
                                        ]
                                    }
                                ]
                            },
                            'use_app-p': true,
                            use_id_connect: idServiceFlg,
                            use_share: true,
                            use_supply: true,
                            'use_wf-p': true,
                            'wf-p-name': 'ワークフロープロバイダー',
                            'workflow-name': 'ワークフロー'
                        },
                        prop: [
                            {
                                key: 'account-lock-count',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アカウントロックまでの試行上限回数',
                                isInherit: true
                            },
                            {
                                key: 'account-lock-release-time',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'アカウントロック解除までの時間',
                                isInherit: true
                            },
                            {
                                key: 'app-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'アプリケーションプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Book呼称',
                                isInherit: true
                            },
                            {
                                key: 'book-open-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'book-open-notification-interval',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'Book開設申請通知間隔',
                                isInherit: true
                            },
                            {
                                key: 'book_create_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'Book作成時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'catalog-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'My-Condition-Dataカタログ呼称',
                                isInherit: true
                            },
                            {
                                key: 'coin-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRコイン呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-consumer-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データコンシューマーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'data-trader-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'データ取引サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'help_contact',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'ヘルプ・問い合わせ',
                                isInherit: true
                            },
                            {
                                key: 'identity-verification-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '本人性確認コード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'login_sms_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータルログイン時SMSメッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のIDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '運営ポータル：初回ログインURL通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'management_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '運営ポータル群のパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'management_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '運営ポータル群のパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_start',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル開始時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'onboarding_store',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '個人ポータル蓄積設定時のオンボーディング記載内容',
                                isInherit: true
                            },
                            {
                                key: 'one-time-login-code-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワンタイムログインコード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'open_book_automatically',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '自動Book開設フラグ',
                                isInherit: true
                            },
                            {
                                key: 'password-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'パスワード有効期限',
                                isInherit: true
                            },
                            {
                                key: 'password-generations-number',
                                type: {
                                    of: 'number',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'パスワード世代管理数',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：アカウント削除の可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_account_delete_ng_message',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル：アカウント削除できない設定時の表示メッセージ内容',
                                isInherit: true
                            },
                            {
                                key: 'personal_disassociation',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：連携解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_initial_login_description',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'Book開設時のQRコード通知文書説明文',
                                isInherit: true
                            },
                            {
                                key: 'personal_share_basic_policy',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：共有の基本方針可否設定',
                                isInherit: true
                            },
                            {
                                key: 'personal_two-step_verification',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '個人ポータル：2段階認証解除可否設定',
                                isInherit: true
                            },
                            {
                                key: 'portal-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '個人ポータル呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '流通制御サービスプロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマット',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_format_errormessage',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのパスワードフォーマットエラーメッセージ',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_password_similarity_check',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'PXR-IDのパスワード類似性チェックを行う',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_prefix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのprefix',
                                isInherit: true
                            },
                            {
                                key: 'pxr_id_suffix',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXR-IDのsuffix',
                                isInherit: true
                            },
                            {
                                key: 'region-root-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: '領域運営サービスプロバイダーの名称',
                                isInherit: true
                            },
                            {
                                key: 'search_target_ns',
                                type: {
                                    of: 'inner[]',
                                    inner: 'SearchTargetNs',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: '検索対象ネームスペース',
                                isInherit: true
                            },
                            {
                                key: 'service-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'サービス名',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_data_category',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForDataCategory',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'データカテゴリ用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'service_category_for_workflow',
                                type: {
                                    of: 'inner[]',
                                    inner: 'ServiceCategoryForWorkflow',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'ワークフロー用サービスカテゴリ',
                                isInherit: true
                            },
                            {
                                key: 'session-expiration',
                                type: {
                                    of: 'inner',
                                    inner: 'Expiration',
                                    cmatrix: null,
                                    candidate: null
                                },
                                description: 'セッション有効期限',
                                isInherit: true
                            },
                            {
                                key: 'system-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'PXRエコシステム基盤呼称',
                                isInherit: true
                            },
                            {
                                key: 'terms_of_service',
                                type: {
                                    of: 'item',
                                    _code: null,
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: '利用規約',
                                isInherit: true
                            },
                            {
                                key: 'use_app-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'アプリケーションプロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_id_connect',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'IDサービスの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_share',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '共有の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_supply',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '提供の使用設定',
                                isInherit: true
                            },
                            {
                                key: 'use_wf-p',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'ワークフロープロバイダーの使用設定',
                                isInherit: true
                            },
                            {
                                key: 'wf-p-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフロープロバイダーの呼称',
                                isInherit: true
                            },
                            {
                                key: 'workflow-name',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: null,
                                    unit: null,
                                    candidate: null
                                },
                                description: 'ワークフローの呼称',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    }
                ]);
            }
            res.end();
        };

        const _extName = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
            } else if (status === ResponseCode.SERVICE_UNAVAILABLE) {
                throw new Error('カタログサービスへの接続に失敗しました');
            }
            res.status(status).end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/name', _extName);
        this._app.get('/catalog', _listener);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerGetBook {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                res.json({
                    ext_name: 'aaa-healthcare-consortium'
                });
                return;
            }
            res.status(status).end();
        };

        const _listener2 = (req: express.Request, res: express.Response) => {
            res.status(status);
            if (status === ResponseCode.OK) {
                const code = Number(req.params.code);
                if (code === 1001008) {
                    res.json([{
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/terms-of-use/region/actor_1000432',
                            name: '高齢者向け健康サポート利用規約',
                            _code: {
                                _value: 1001008,
                                _ver: 1
                            },
                            inherit: {
                                _value: 204,
                                _ver: 1
                            },
                            description: '高齢者向け健康サポートの利用規約です。'
                        },
                        template: {
                            _code: {
                                _value: 1001008,
                                _ver: 1
                            },
                            'deleting-data-flag': false,
                            'period-of-re-consent': null,
                            're-consent-flag': false,
                            'returning-data-flag': false,
                            'terms-of-use': [
                                {
                                    title: 'リージョン利用規約',
                                    section: [
                                        {
                                            title: '第1項',
                                            content: [
                                                {
                                                    sentence: '規約～～～。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        prop: [
                            {
                                key: 'deleting-data-flag',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'Region離脱時データ削除フラグ',
                                isInherit: true
                            },
                            {
                                key: 'period-of-re-consent',
                                type: {
                                    of: 'string',
                                    cmatrix: null,
                                    format: {
                                        _value: 6,
                                        _ver: 1
                                    },
                                    unit: null,
                                    candidate: null
                                },
                                description: '再同意期限',
                                isInherit: true
                            },
                            {
                                key: 're-consent-flag',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: '再同意フラグ',
                                isInherit: true
                            },
                            {
                                key: 'returning-data-flag',
                                type: {
                                    of: 'boolean',
                                    cmatrix: null
                                },
                                description: 'Region離脱時データ返却フラグ',
                                isInherit: true
                            },
                            {
                                key: 'terms-of-use',
                                type: {
                                    of: 'item[]',
                                    cmatrix: null,
                                    candidate: {
                                        ns: null,
                                        _code: [
                                            {
                                                _value: 61,
                                                _ver: 1
                                            }
                                        ],
                                        base: null
                                    }
                                },
                                description: 'Region利用規約',
                                isInherit: true
                            }
                        ],
                        attribute: null
                    }]);
                } else if (code === 1000432) {
                    res.json(
                        {
                            catalogItem: {
                                ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root',
                                name: 'aaa',
                                _code: {
                                    _value: 1000432,
                                    _ver: 1
                                },
                                inherit: {
                                    _value: 49,
                                    _ver: 1
                                },
                                description: 'aaaの定義です。'
                            },
                            template: {
                                _code: {
                                    _value: 1000432,
                                    _ver: 1
                                },
                                'breakaway-flg': false,
                                category: null,
                                'information-site': null,
                                'main-block': {
                                    _value: 1000402,
                                    _ver: 1
                                },
                                'other-block': null,
                                statement: [
                                    {
                                        title: '組織ステートメント',
                                        section: [
                                            {
                                                title: '組織ステートメント',
                                                content: [
                                                    {
                                                        sentence: 'aaa地区の住民が、近隣の病院をはじめとする様々な医療・健康サービスで質の高いサービスをスムーズに受けられるように、複数の医療・ヘルスケアサービスを認定アプリケーションで連携させるサービスを企画・運営します。'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                status: [
                                    {
                                        status: 'certified',
                                        by: {
                                            _value: 1000431,
                                            _ver: 1
                                        },
                                        at: '2020-01-01T00:00:00.000+0900'
                                    }
                                ],
                                region: [
                                    {
                                        _value: 1000451,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000452,
                                        _ver: 1
                                    },
                                    {
                                        _value: 1000453,
                                        _ver: 1
                                    }
                                ],
                                'trader-alliance': [
                                    {
                                        _value: 1000435,
                                        _ver: 1
                                    }
                                ]
                            },
                            prop: [
                                {
                                    key: 'breakaway-flg',
                                    type: {
                                        of: 'boolean',
                                        cmatrix: null
                                    },
                                    description: '離脱フラグ',
                                    isInherit: true
                                },
                                {
                                    key: 'category',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: [
                                                'catalog/model/category/share/actor',
                                                'catalog/built_in/category/share/actor',
                                                'catalog/ext/aaa-healthcare-consortium/category/share/actor',
                                                'catalog/model/category/supply/actor',
                                                'catalog/built_in/category/supply/actor',
                                                'catalog/ext/aaa-healthcare-consortium/category/supply/actor'
                                            ],
                                            _code: null,
                                            base: null
                                        }
                                    },
                                    description: null,
                                    isInherit: true
                                },
                                {
                                    key: 'information-site',
                                    type: {
                                        of: 'string',
                                        cmatrix: null,
                                        format: null,
                                        unit: null,
                                        candidate: null
                                    },
                                    description: '情報サイト',
                                    isInherit: true
                                },
                                {
                                    key: 'main-block',
                                    type: {
                                        of: 'code',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 29,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: 'アクター参加時に割り当てられたPXR-Block',
                                    isInherit: true
                                },
                                {
                                    key: 'other-block',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 29,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: '他アクターから引き継いだPXR-Blockの配列',
                                    isInherit: true
                                },
                                {
                                    key: 'statement',
                                    type: {
                                        of: 'item[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: [
                                                {
                                                    _value: 61,
                                                    _ver: 1
                                                }
                                            ],
                                            base: null
                                        }
                                    },
                                    description: '組織ステートメント',
                                    isInherit: true
                                },
                                {
                                    key: 'status',
                                    type: {
                                        of: 'inner[]',
                                        inner: 'CertStatus',
                                        cmatrix: null,
                                        candidate: null
                                    },
                                    description: '認定の履歴',
                                    isInherit: true
                                },
                                {
                                    key: 'region',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 48,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: 'Region定義',
                                    isInherit: true
                                },
                                {
                                    key: 'trader-alliance',
                                    type: {
                                        of: 'code[]',
                                        cmatrix: null,
                                        candidate: {
                                            ns: null,
                                            _code: null,
                                            base: {
                                                _value: 38,
                                                _ver: 1
                                            }
                                        }
                                    },
                                    description: '提携するデータ取引サービスプロバイダーのコード配列',
                                    isInherit: true
                                }
                            ],
                            attribute: null
                        }
                    );
                } else if (code === 1000004) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/wf',
                            name: 'テスト用ワークフロー',
                            _code: {
                                _value: 1000004,
                                _ver: 1
                            },
                            inherit: {
                                _value: 47,
                                _ver: 1
                            },
                            description: 'テスト用ワークフローです'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000117,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000003,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'テスト用ワークフローの組織ステートメントです。'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            workflow: [
                                {
                                    _value: 1000007,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 1000104) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 1000104,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': {
                                _value: 1000116,
                                _ver: 1
                            },
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else if (code === 2000002) {
                    res.json({
                        catalogItem: {
                            ns: 'catalog/ext/aaa-healthcare-consortium/actor/app',
                            name: 'テストアプリケーションです。',
                            _code: {
                                _value: 2000001,
                                _ver: 1
                            },
                            inherit: {
                                _value: 42,
                                _ver: 1
                            },
                            description: 'テスト'
                        },
                        template: {
                            'breakaway-flg': false,
                            category: null,
                            'information-site': '',
                            'main-block': null,
                            'other-block': null,
                            'region-alliance': [
                                {
                                    _value: 1000069,
                                    _ver: 1
                                }
                            ],
                            statement: [
                                {
                                    title: '組織ステートメント',
                                    section: [
                                        {
                                            title: 'ご挨拶',
                                            content: [
                                                {
                                                    sentence: 'test'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            status: [
                                {
                                    status: 'certified',
                                    by: {
                                        _value: 1000001,
                                        _ver: 1
                                    },
                                    at: '2020-01-01T00:00:00.000+0900'
                                }
                            ],
                            application: [
                                {
                                    _value: 1000107,
                                    _ver: 1
                                }
                            ]
                        },
                        prop: null,
                        attribute: null
                    });
                } else {
                    res.status(204).end();
                }
                return;
            }
            res.status(status).end();
        };

        const _listener3 = (req: express.Request, res: express.Response) => {
            if (status === ResponseCode.OK) {
                const ns = req.query['ns'];
                if (ns === 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region') {
                    res.json(
                        [
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                                    name: '高齢者向け健康サポート',
                                    _code: {
                                        _value: 1000451,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 48,
                                        _ver: 1
                                    },
                                    description: '高齢者向け健康サポートのリージョンの定義です。'
                                },
                                template: {
                                    _code: {
                                        _value: 1000451,
                                        _ver: 1
                                    },
                                    'app-alliance': [
                                        {
                                            _value: 1000436,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000437,
                                            _ver: 1
                                        }
                                    ],
                                    'information-site': null,
                                    required_app: null,
                                    required_wf: null,
                                    statement: [
                                        {
                                            title: 'リージョンステートメント',
                                            section: [
                                                {
                                                    title: 'ステートメント',
                                                    content: [
                                                        {
                                                            sentence: '高齢者が医療・健康サービスを簡単に受けられるようにサポートするアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    'terms-of-use': {
                                        _value: 1001008,
                                        _ver: 1
                                    },
                                    'wf-alliance': [
                                        {
                                            _value: 1000438,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000440,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000441,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000442,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000443,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000444,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: [
                                    {
                                        key: 'app-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(アプリケーション)のコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'information-site',
                                        type: {
                                            of: 'string',
                                            cmatrix: null,
                                            format: null,
                                            unit: null,
                                            candidate: null
                                        },
                                        description: 'Regionの情報サイト',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_app',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須アプリケーションのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_wf',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須ワークフローのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'statement',
                                        type: {
                                            of: 'item[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: [
                                                    {
                                                        _value: 61,
                                                        _ver: 1
                                                    }
                                                ],
                                                base: null
                                            }
                                        },
                                        description: 'Regionステートメント',
                                        isInherit: true
                                    },
                                    {
                                        key: 'terms-of-use',
                                        type: {
                                            of: 'code',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: null
                                            }
                                        },
                                        description: 'Region利用規約のカタログコード',
                                        isInherit: true
                                    },
                                    {
                                        key: 'wf-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(ワークフロー)のコード配列',
                                        isInherit: true
                                    }
                                ],
                                attribute: null
                            },
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                                    name: '子育てサポート',
                                    _code: {
                                        _value: 1000452,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 48,
                                        _ver: 1
                                    },
                                    description: '子育てサポートのリージョンの定義です。'
                                },
                                template: {
                                    _code: {
                                        _value: 1000452,
                                        _ver: 1
                                    },
                                    'app-alliance': [
                                        {
                                            _value: 1000436,
                                            _ver: 1
                                        }
                                    ],
                                    'information-site': null,
                                    required_app: null,
                                    required_wf: null,
                                    statement: [
                                        {
                                            title: 'リージョンステートメント',
                                            section: [
                                                {
                                                    title: '子育てサポート',
                                                    content: [
                                                        {
                                                            sentence: '子育て世帯に便利なアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    'terms-of-use': null,
                                    'wf-alliance': [
                                        {
                                            _value: 1000438,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000439,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000441,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000442,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000444,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: [
                                    {
                                        key: 'app-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(アプリケーション)のコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'information-site',
                                        type: {
                                            of: 'string',
                                            cmatrix: null,
                                            format: null,
                                            unit: null,
                                            candidate: null
                                        },
                                        description: 'Regionの情報サイト',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_app',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須アプリケーションのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_wf',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須ワークフローのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'statement',
                                        type: {
                                            of: 'item[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: [
                                                    {
                                                        _value: 61,
                                                        _ver: 1
                                                    }
                                                ],
                                                base: null
                                            }
                                        },
                                        description: 'Regionステートメント',
                                        isInherit: true
                                    },
                                    {
                                        key: 'terms-of-use',
                                        type: {
                                            of: 'code',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: null
                                            }
                                        },
                                        description: 'Region利用規約のカタログコード',
                                        isInherit: true
                                    },
                                    {
                                        key: 'wf-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(ワークフロー)のコード配列',
                                        isInherit: true
                                    }
                                ],
                                attribute: null
                            },
                            {
                                catalogItem: {
                                    ns: 'catalog/ext/aaa-healthcare-consortium/actor/region-root/actor_1000432/region',
                                    name: '働く世代向け基礎体力向上サポート',
                                    _code: {
                                        _value: 1000453,
                                        _ver: 1
                                    },
                                    inherit: {
                                        _value: 48,
                                        _ver: 1
                                    },
                                    description: '働く世代向け基礎体力向上サポートのリージョンの定義です。'
                                },
                                template: {
                                    _code: {
                                        _value: 1000453,
                                        _ver: 1
                                    },
                                    'app-alliance': [
                                        {
                                            _value: 1000437,
                                            _ver: 1
                                        }
                                    ],
                                    'information-site': null,
                                    required_app: null,
                                    required_wf: null,
                                    statement: [
                                        {
                                            title: 'リージョンステートメント',
                                            section: [
                                                {
                                                    title: '働く世代向け基礎体力向上サポート',
                                                    content: [
                                                        {
                                                            sentence: '仕事の合間でもできる基礎体力向上サポートアプリの提供と利用講習会の開催などを行っています。'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    'terms-of-use': null,
                                    'wf-alliance': [
                                        {
                                            _value: 1000438,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000440,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000441,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000442,
                                            _ver: 1
                                        },
                                        {
                                            _value: 1000444,
                                            _ver: 1
                                        }
                                    ]
                                },
                                prop: [
                                    {
                                        key: 'app-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(アプリケーション)のコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'information-site',
                                        type: {
                                            of: 'string',
                                            cmatrix: null,
                                            format: null,
                                            unit: null,
                                            candidate: null
                                        },
                                        description: 'Regionの情報サイト',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_app',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 41,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須アプリケーションのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'required_wf',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: '必須ワークフローのコード配列',
                                        isInherit: true
                                    },
                                    {
                                        key: 'statement',
                                        type: {
                                            of: 'item[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: [
                                                    {
                                                        _value: 61,
                                                        _ver: 1
                                                    }
                                                ],
                                                base: null
                                            }
                                        },
                                        description: 'Regionステートメント',
                                        isInherit: true
                                    },
                                    {
                                        key: 'terms-of-use',
                                        type: {
                                            of: 'code',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: null
                                            }
                                        },
                                        description: 'Region利用規約のカタログコード',
                                        isInherit: true
                                    },
                                    {
                                        key: 'wf-alliance',
                                        type: {
                                            of: 'code[]',
                                            cmatrix: null,
                                            candidate: {
                                                ns: null,
                                                _code: null,
                                                base: {
                                                    _value: 46,
                                                    _ver: 1
                                                }
                                            }
                                        },
                                        description: 'Regionメンバー(ワークフロー)のコード配列',
                                        isInherit: true
                                    }
                                ],
                                attribute: null
                            }
                        ]
                    );
                }
                return;
            }
            res.status(status).end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app = express();
        this._app.get('/catalog/name', _listener);
        this._app.get('/catalog/:code', _listener2);
        this._app.get('/catalog', _listener3);
        this._server = this._app.listen(3001);
    }
}

export class StubCatalogServerSettingsTargetFind {
    _app: express.Express;
    _server: Server;
    constructor (status: number) {
        this._app = express();

        // イベントハンドラー
        const _listener = (req: express.Request, res: express.Response) => {
            const code = Number(req.params.code);
            if (status === 200) {
                if (code === 1000001) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000001,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000004) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000004,
                                _ver: 2
                            }
                        }
                    });
                } else if (code === 1000007) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000007,
                                _ver: 3
                            }
                        }
                    });
                } else if (code === 1000107) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000107,
                                _ver: 4
                            }
                        }
                    });
                } else if (code === 1000011) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000001,
                                _ver: 1
                            }
                        }
                    });
                } else if (code === 1000014) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000004,
                                _ver: 2
                            }
                        }
                    });
                } else if (code === 1000017) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000007,
                                _ver: 3
                            }
                        }
                    });
                } else if (code === 1000117) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000107,
                                _ver: 4
                            }
                        }
                    });
                } else if (code === 1000207) {
                    res.status(status);
                    res.json({
                        catalogItem: {
                            _code: {
                                _value: 1000207,
                                _ver: 4
                            }
                        }
                    });
                } else if (code === 1000217) {
                    res.status(status);
                    res.json({
                        template: {
                            _code: {
                                _value: 1000207,
                                _ver: 4
                            }
                        }
                    });
                } else {
                    res.status(404);
                }
            } else {
                res.status(status);
            }
            res.end();
        };

        // ハンドラーのイベントリスナーを追加、アプリケーションの起動
        this._app.get('/catalog/:code', _listener);
        this._server = this._app.listen(3001);
    }
}