export interface CrmLeadPayload {
  readonly phone: string;
  readonly name: string;
  readonly email?: string;
  readonly document?: string;
  readonly city?: string;
  readonly state?: string;
  readonly pipeline_stage?: string;
  readonly consultant?: string;
  readonly observation?: string;
}

const CRM_WEBHOOK_URL = '/api/webhooks/leads/cmpy5fztd000348rojo6xn9f5';

export async function sendLeadToCrm(payload: CrmLeadPayload): Promise<void> {
  const response = await fetch(CRM_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`CRM webhook retornou status ${response.status}`);
  }
}