export interface WhatsappMessage {
  content: {
    entry: [
      {
        id: string;
        changes: [
          {
            value: {
              contacts: [
                {
                  profile: {
                    name: string;
                  };
                  wa_id: string;
                }
              ];
              messages: [
                {
                  from: string;

                  id: string;
                  timestamp: string;
                  type: string;
                  text: {
                    body: string;
                  };
                }
              ];
              messaging_product: string;
              metadata: {
                display_phone_number: string;
                phone_number_id: string;
              };
            };
            field: string;
          }
        ];
      }
    ];
    object: string;
  };
}

export interface WhatsappMessageStatus {
  content: {
    entry: [
      {
        id: string;
        changes: [
          {
            value: {
              statuses: [
                {
                  id: string;
                  recipient_id: string;
                  status:
                    | 'deleted'
                    | 'delivered'
                    | 'failed'
                    | 'read'
                    | 'sent'
                    | 'warning';
                  timestamp: string;
                  conversation: {
                    id: string;
                    origin: {
                      type: string;
                    };
                  };
                  pricing: {
                    billable: boolean;
                    pricing_mode: string;
                    category: string;
                  };
                }
              ];
              messaging_product: string;
              metadata: {
                display_phone_number: string;
                phone_number_id: string;
              };
            };
            field: string;
          }
        ];
      }
    ];
    object: string;
  };
}
